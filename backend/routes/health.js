'use strict';

/**
 * health.js — Health Check Route
 *
 * GET /api/health
 *
 * Returns the operational status of the server and database.
 * This endpoint is intentionally exempt from rate limiting and
 * authentication so monitoring tools can reach it freely.
 *
 * Response (healthy):
 *   200 { status: 'ok', db: 'connected', uptime: <seconds>, timestamp: <iso> }
 *
 * Response (DB down):
 *   503 { status: 'degraded', db: 'unreachable', ... }
 */

const express = require('express');
const { pool } = require('../config/database');

const router = express.Router();

router.get('/', async (req, res) => {
  let dbStatus = 'unreachable';
  let httpStatus = 503;

  try {
    await pool.query('SELECT 1');
    dbStatus = 'connected';
    httpStatus = 200;
  } catch {
    dbStatus = 'unreachable';
    httpStatus = 503;
  }

  res.status(httpStatus).json({
    success: httpStatus === 200,
    status: httpStatus === 200 ? 'ok' : 'degraded',
    db: dbStatus,
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    requestId: req.id,
  });
});

module.exports = router;
