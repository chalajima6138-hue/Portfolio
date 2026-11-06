'use strict';

/**
 * server.js — Express Application Entry Point
 *
 * Responsibilities:
 *   1. Load and validate environment configuration
 *   2. Apply security middleware (Helmet, CORS, rate limiting)
 *   3. Register request middleware (ID, body parsing, logging)
 *   4. Mount API routes
 *   5. Register the centralized error handler (must be last)
 *   6. Start the HTTP server and test the DB connection
 *   7. Handle graceful shutdown on SIGTERM / SIGINT
 */

'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/env');
const { testConnection, closePool } = require('./config/database');
const requestId = require('./middleware/requestId');
const { generalLimiter } = require('./middleware/rateLimiter');
const { errorHandler } = require('./middleware/errorHandler');

// Route modules
const healthRouter = require('./routes/health');
const contactRouter = require('./routes/contact');
const portfolioRouter = require('./routes/portfolio');
const adminRouter = require('./routes/admin');

const app = express();

// ============================================================
// 1. SECURITY HEADERS — Helmet
// ============================================================
app.use(
  helmet({
    // Content Security Policy: restrict where resources can be loaded from
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
      },
    },
    // HTTP Strict Transport Security (enforced in production)
    hsts: config.isProd
      ? { maxAge: 31536000, includeSubDomains: true, preload: true }
      : false,
    // Other Helmet defaults enabled: X-Content-Type-Options, X-Frame-Options,
    // X-XSS-Protection, Referrer-Policy, Permissions-Policy
  })
);

// ============================================================
// 2. CORS — Only allow the configured frontend origin
// ============================================================
const corsOrigins = config.cors.origin.split(',').map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., curl, Postman, server-to-server)
      // in development only
      if (!origin) {
        return callback(null, config.isDev);
      }
      if (corsOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS: Origin '${origin}' is not allowed.`));
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
    exposedHeaders: ['X-Request-Id', 'RateLimit-Limit', 'RateLimit-Remaining', 'RateLimit-Reset'],
    credentials: true,
    maxAge: 86400, // Cache preflight for 24 hours
  })
);

// ============================================================
// 3. REQUEST ID — Assign UUID to every request (before logging)
// ============================================================
app.use(requestId);

// ============================================================
// 4. REQUEST BODY PARSING
// ============================================================
// Limit body size to 10 KB — rejects oversized payloads before
// they reach route handlers (guards against request flooding).
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// ============================================================
// 5. HTTP REQUEST LOGGING — Morgan
// ============================================================
// Include the request ID in every log line for traceability.
morgan.token('reqid', (req) => req.id);
const logFormat = config.isDev
  ? ':reqid :method :url :status :response-time ms'
  : ':reqid :remote-addr :method :url :status :response-time ms :date[iso]';

app.use(morgan(logFormat));

// ============================================================
// 6. GENERAL RATE LIMITER — Applied to all /api routes
// ============================================================
app.use('/api', generalLimiter);

// ============================================================
// 7. ROUTES
// ============================================================
app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);
app.use('/api/portfolio', portfolioRouter);
app.use('/api/admin', adminRouter);

// 404 handler — catch requests to undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route not found: ${req.method} ${req.path}`,
    requestId: req.id,
  });
});

// ============================================================
// 8. CENTRALIZED ERROR HANDLER — Must be registered last
// ============================================================
app.use(errorHandler);

// ============================================================
// 9. START SERVER
// ============================================================
let server;

async function start() {
  try {
    // Test DB connection before accepting traffic
    await testConnection();

    server = app.listen(config.port, () => {
      console.log(`[Server] Portfolio backend running on port ${config.port}`);
      console.log(`[Server] Environment: ${config.nodeEnv}`);
      console.log(`[Server] Health check: http://localhost:${config.port}/api/health`);
    });
  } catch (err) {
    console.error('[Server] Failed to start:', err.message);
    if (config.isProd) process.exit(1);
    // In dev/test, still export the app even without a DB (tests mock the DB)
  }
}

// ============================================================
// 10. GRACEFUL SHUTDOWN
// ============================================================
async function shutdown(signal) {
  console.log(`\n[Server] Received ${signal}. Shutting down gracefully...`);

  if (server) {
    server.close(async () => {
      console.log('[Server] HTTP server closed.');
      await closePool();
      console.log('[Server] Shutdown complete.');
      process.exit(0);
    });

    // Force exit if shutdown takes too long
    setTimeout(() => {
      console.error('[Server] Shutdown timed out. Forcing exit.');
      process.exit(1);
    }, 10000);
  } else {
    await closePool();
    process.exit(0);
  }
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// Handle unhandled promise rejections — log and exit in production
process.on('unhandledRejection', (reason) => {
  console.error('[Server] Unhandled promise rejection:', reason);
  if (config.isProd) process.exit(1);
});

// Start the server (not called during testing — tests import app directly)
if (require.main === module) {
  start();
}

// Export for testing
module.exports = app;
