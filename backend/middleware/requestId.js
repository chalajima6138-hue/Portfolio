'use strict';

/**
 * requestId.js — Unique Request ID Middleware
 *
 * Assigns a UUID (v4) to every incoming request and attaches it to:
 *   - req.id          (used by controllers and services for tracing)
 *   - X-Request-Id response header (returned to clients for debugging)
 *
 * This enables correlation of logs, errors, and responses for a
 * specific request across the entire request lifecycle.
 */

const { v4: uuidv4 } = require('uuid');

function requestId(req, res, next) {
  const id = uuidv4();
  req.id = id;
  res.setHeader('X-Request-Id', id);
  next();
}

module.exports = requestId;
