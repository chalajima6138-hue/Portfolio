'use strict';

/**
 * database.js — PostgreSQL Connection Pool
 *
 * Creates and exports a pg.Pool instance configured from environment
 * variables. The pool is reused across all requests (do not create
 * new pools per request).
 *
 * Usage:
 *   const db = require('../config/database');
 *   const result = await db.query('SELECT * FROM contact_messages WHERE id = $1', [id]);
 */

const { Pool } = require('pg');
const config = require('./env');

// Build connection config
const poolConfig = config.database.url
  ? {
      connectionString: config.database.url,
      // SSL required for production hosting (Render, Railway, Heroku, etc.)
      ssl: config.isProd ? { rejectUnauthorized: false } : false,
    }
  : {
      host: config.database.host,
      port: config.database.port,
      database: config.database.name,
      user: config.database.user,
      password: config.database.password,
      ssl: config.isProd ? { rejectUnauthorized: false } : false,
    };

// Pool settings
const pool = new Pool({
  ...poolConfig,
  max: 10,                    // Max concurrent connections
  idleTimeoutMillis: 30000,   // Release idle connections after 30s
  connectionTimeoutMillis: 5000, // Fail fast if DB is unreachable
});

// Log connection errors (pool-level errors won't crash the process)
pool.on('error', (err) => {
  console.error('[Database] Unexpected pool error:', err.message);
});

/**
 * Test the database connection.
 * Called at server startup — exits if the DB is unreachable.
 */
async function testConnection() {
  let client;
  try {
    client = await pool.connect();
    await client.query('SELECT 1');
    console.log('[Database] PostgreSQL connection established successfully.');
  } catch (err) {
    console.error('[Database] Failed to connect to PostgreSQL:', err.message);
    if (config.isProd) {
      process.exit(1);
    }
    throw err;
  } finally {
    if (client) client.release();
  }
}

/**
 * Gracefully close the pool.
 * Called during server shutdown.
 */
async function closePool() {
  await pool.end();
  console.log('[Database] Connection pool closed.');
}

module.exports = { pool, testConnection, closePool };
