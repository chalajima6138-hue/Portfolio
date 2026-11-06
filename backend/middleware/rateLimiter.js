'use strict';

/**
 * rateLimiter.js — Express Rate Limiting Middleware
 *
 * Provides three separate rate limiters with different thresholds:
 *
 *   generalLimiter  — Applied to all /api routes
 *   contactLimiter  — Applied only to POST /api/contact (strict anti-spam)
 *   adminLimiter    — Applied to admin login (brute-force protection)
 *
 * All limiters key by IP address and return a standard 429 response
 * with a Retry-After header so clients know when to try again.
 */

const rateLimit = require('express-rate-limit');
const config = require('../config/env');

/**
 * Standard handler for all rate-limit violations.
 * Returns a consistent JSON error response (not the default HTML page).
 */
function rateLimitHandler(req, res) {
  const retryAfter = Math.ceil(req.rateLimit.resetTime / 1000 - Date.now() / 1000);
  res.status(429).json({
    success: false,
    error: 'Too many requests. Please wait before trying again.',
    requestId: req.id,
    retryAfter: retryAfter > 0 ? retryAfter : 60,
  });
}

/**
 * General API rate limiter — broad protection for all /api routes.
 * 100 requests per 15 minutes per IP.
 */
const generalLimiter = rateLimit({
  windowMs: config.rateLimit.general.windowMs,
  max: config.rateLimit.general.max,
  standardHeaders: true,     // Return RateLimit-* headers
  legacyHeaders: false,      // Disable X-RateLimit-* (deprecated)
  handler: rateLimitHandler,
  skip: (req) => req.path === '/health', // Health check is never rate-limited
});

/**
 * Contact form rate limiter — strict anti-spam.
 * Default: 5 submissions per 15 minutes per IP.
 * This prevents automated form flooding.
 */
const contactLimiter = rateLimit({
  windowMs: config.rateLimit.contact.windowMs,
  max: config.rateLimit.contact.max,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
  message: 'Too many messages submitted. Please wait 15 minutes before trying again.',
});

/**
 * Admin login rate limiter — brute-force protection.
 * Default: 10 attempts per 15 minutes per IP.
 * Failed logins are counted against the limit.
 */
const adminLimiter = rateLimit({
  windowMs: config.rateLimit.admin.windowMs,
  max: config.rateLimit.admin.max,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
  skipSuccessfulRequests: false, // Count ALL requests, not just failures
});

module.exports = { generalLimiter, contactLimiter, adminLimiter };
