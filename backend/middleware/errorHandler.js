'use strict';

/**
 * errorHandler.js — Centralized Express Error Handler
 *
 * This must be registered LAST in the Express middleware chain
 * (after all routes). It catches errors forwarded via next(err).
 *
 * Security rules enforced here:
 *   1. Stack traces are NEVER sent to clients in production.
 *   2. Database errors are sanitized — pg error codes are mapped
 *      to safe generic messages.
 *   3. Unknown errors return a generic 500 without internal details.
 *   4. Every error is logged with the request ID for traceability.
 */

const config = require('../config/env');

/**
 * Map known PostgreSQL error codes to safe, user-facing messages.
 * Full code reference: https://www.postgresql.org/docs/current/errcodes-appendix.html
 */
const PG_ERROR_MAP = {
  '23505': { status: 409, message: 'A record with that value already exists.' },
  '23503': { status: 409, message: 'Referenced record does not exist.' },
  '23502': { status: 400, message: 'A required field value is missing.' },
  '22P02': { status: 400, message: 'Invalid input format.' },
  '42P01': { status: 500, message: 'Server configuration error.' },
};

/**
 * Create a standardized API error response.
 */
function errorResponse(res, { status, message, requestId, errors = null }) {
  const body = {
    success: false,
    error: message,
    requestId,
  };
  if (errors) body.errors = errors;
  return res.status(status).json(body);
}

/**
 * The centralized error-handling middleware.
 * Express identifies it by its 4-argument signature (err, req, res, next).
 */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const requestId = req.id || 'unknown';

  // --- Validation errors (Zod) ---
  if (err.name === 'ZodError') {
    const errors = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));
    console.warn(`[${requestId}] Validation error:`, JSON.stringify(errors));
    return errorResponse(res, {
      status: 422,
      message: 'Validation failed. Please check the submitted data.',
      requestId,
      errors,
    });
  }

  // --- JWT errors ---
  if (err.name === 'JsonWebTokenError') {
    console.warn(`[${requestId}] JWT error: ${err.message}`);
    return errorResponse(res, {
      status: 401,
      message: 'Invalid or malformed authentication token.',
      requestId,
    });
  }

  if (err.name === 'TokenExpiredError') {
    console.warn(`[${requestId}] JWT expired`);
    return errorResponse(res, {
      status: 401,
      message: 'Authentication token has expired. Please log in again.',
      requestId,
    });
  }

  // --- PostgreSQL errors ---
  if (err.code && PG_ERROR_MAP[err.code]) {
    const mapped = PG_ERROR_MAP[err.code];
    console.error(`[${requestId}] DB error code=${err.code}:`, err.message);
    return errorResponse(res, {
      status: mapped.status,
      message: mapped.message,
      requestId,
    });
  }

  // --- Application-level errors with explicit status ---
  if (err.status && err.status < 500) {
    console.warn(`[${requestId}] App error ${err.status}: ${err.message}`);
    return errorResponse(res, {
      status: err.status,
      message: err.message || 'Request error.',
      requestId,
    });
  }

  // --- Unexpected server errors ---
  // Log full details internally, never send internals to the client.
  console.error(`[${requestId}] Unhandled error:`, err);

  return errorResponse(res, {
    status: 500,
    message: config.isDev
      ? err.message  // Show raw message in development for debugging
      : 'An unexpected server error occurred. Please try again later.',
    requestId,
  });
}

/**
 * Create an application-level error with a specific HTTP status.
 * Use this in controllers/services to signal expected error conditions.
 *
 * Example:
 *   throw createError(404, 'Message not found.');
 */
function createError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

module.exports = { errorHandler, createError };
