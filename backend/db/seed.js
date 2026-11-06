'use strict';

/**
 * seed.js — Database Seeder
 *
 * Creates the initial admin account using credentials from .env.
 * Run this ONCE after migrations to set up the admin user.
 *
 * Usage:
 *   cd backend
 *   node db/seed.js
 *
 * SECURITY: Change ADMIN_PASSWORD in .env before running.
 * Remove ADMIN_USERNAME / ADMIN_EMAIL / ADMIN_PASSWORD from .env
 * after seeding is complete.
 */

const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

// Load .env
const envPath = path.resolve(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.error('[Seed] .env file not found. Copy .env.example to .env first.');
  process.exit(1);
}
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

const { ADMIN_USERNAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

if (!ADMIN_USERNAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error('[Seed] ADMIN_USERNAME, ADMIN_EMAIL, and ADMIN_PASSWORD must be set in .env');
  process.exit(1);
}

if (ADMIN_PASSWORD === 'change_this_strong_password_before_seeding') {
  console.error('[Seed] You must change the ADMIN_PASSWORD in .env before seeding!');
  process.exit(1);
}

if (ADMIN_PASSWORD.length < 12) {
  console.error('[Seed] ADMIN_PASSWORD must be at least 12 characters long.');
  process.exit(1);
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

async function seed() {
  const client = await pool.connect();
  try {
    // Check if admin already exists
    const existing = await client.query(
      'SELECT id FROM admin_users WHERE LOWER(username) = LOWER($1)',
      [ADMIN_USERNAME]
    );

    if (existing.rows.length > 0) {
      console.log(`[Seed] Admin user '${ADMIN_USERNAME}' already exists. Skipping.`);
      return;
    }

    // Hash the password with bcrypt (salt rounds = 12)
    console.log('[Seed] Hashing password...');
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);

    await client.query(
      `INSERT INTO admin_users (username, email, password_hash)
       VALUES ($1, $2, $3)`,
      [ADMIN_USERNAME, ADMIN_EMAIL, passwordHash]
    );

    console.log(`[Seed] Admin user '${ADMIN_USERNAME}' created successfully.`);
    console.log('[Seed] IMPORTANT: Remove ADMIN_PASSWORD from .env now that seeding is complete.');
  } finally {
    client.release();
    await pool.end();
  }
}

seed().catch((err) => {
  console.error('[Seed] Error:', err.message);
  process.exit(1);
});
