'use strict';

/**
 * auth.js — JWT Authentication Middleware
 *
 * Verifies the Bearer token in the Authorization header.
 * Attaches the decoded payload to req.admin on success.
 * Calls next(err) with a 401 error on failure — handled by errorHandler.
 *
 * Usage (protect a route):
 *   const { requireAuth } = require('../middleware/auth');
 *   router.get('/messages', requireAuth, adminController.listMessages);
 */

const jwt = require('jsonwebtoken');
const config = require('../config/env');
const { createError } = require('./errorHandler');

/**
 * Extract Bearer token from the Authorization header.
 * Returns the token string or null.
 */
function extractToken(req) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  return authHeader.slice(7).trim();
}

/**
 * Middleware: require a valid JWT to proceed.
 */
function requireAuth(req, res, next) {
  const token = extractToken(req);

  if (!token) {
    return next(createError(401, 'Authentication required. Provide a Bearer token.'));
  }

  try {
    const payload = jwt.verify(token, config.jwt.secret);
    req.admin = payload; // { id, username, email, iat, exp }
    next();
  } catch (err) {
    // JsonWebTokenError and TokenExpiredError are handled by errorHandler
    next(err);
  }
}

module.exports = { requireAuth };
