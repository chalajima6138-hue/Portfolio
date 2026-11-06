'use strict';

/**
 * migrate.js — Database Migration Runner
 *
 * Runs all SQL migration files in backend/db/migrations/ in order.
 * Tracks applied migrations in a migrations table to avoid re-running.
 *
 * Usage:
 *   cd backend
 *   node db/migrate.js
 */

const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');

// Load env manually (not via config/env.js to avoid startup side effects)
const envPath = path.resolve(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (key && !(key in process.env)) process.env[key] = val;
  }
}

const pool = new Pool(
  process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL }
    : {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        database: process.env.DB_NAME || 'portfolio_db',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '',
      }
);

async function migrate() {
  const client = await pool.connect();

  try {
    // Create migrations tracking table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS _migrations (
        id         SERIAL PRIMARY KEY,
        filename   VARCHAR(255) UNIQUE NOT NULL,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    // Read migration files in sorted order
    const migrationsDir = path.resolve(__dirname, 'migrations');
    const files = fs
      .readdirSync(migrationsDir)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    for (const filename of files) {
      // Check if already applied
      const check = await client.query(
        'SELECT id FROM _migrations WHERE filename = $1',
        [filename]
      );
      if (check.rows.length > 0) {
        console.log(`[Migrate] Skipped (already applied): ${filename}`);
        continue;
      }

      const filePath = path.join(migrationsDir, filename);
      const sql = fs.readFileSync(filePath, 'utf8');

      await client.query('BEGIN');
      try {
        await client.query(sql);
        await client.query(
          'INSERT INTO _migrations (filename) VALUES ($1)',
          [filename]
        );
        await client.query('COMMIT');
        console.log(`[Migrate] Applied: ${filename}`);
      } catch (err) {
        await client.query('ROLLBACK');
        throw new Error(`[Migrate] Failed on ${filename}: ${err.message}`);
      }
    }

    console.log('[Migrate] All migrations complete.');
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch((err) => {
  console.error('[Migrate] Fatal error:', err.message);
  process.exit(1);
});
