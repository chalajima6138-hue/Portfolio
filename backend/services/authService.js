'use strict';

/**
 * authService.js — Admin Authentication Service
 *
 * Handles secure login logic:
 *   1. Look up admin user by username (case-insensitive)
 *   2. Compare provided password against stored bcrypt hash
 *   3. Sign and return a JWT on success
 *
 * Security notes:
 *   - bcrypt.compare always runs (prevents timing-based username enumeration)
 *   - Generic error message used for both wrong username and wrong password
 *   - Passwords are never logged or returned
 */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/database');
const config = require('../config/env');
const { createError } = require('../middleware/errorHandler');

/**
 * Authenticate an admin user and return a signed JWT.
 */
async function login(username, password) {
  // Look up user by username (case-insensitive)
  const sql = `
    SELECT id, username, email, password_hash
    FROM admin_users
    WHERE LOWER(username) = LOWER($1)
    LIMIT 1
  `;
  const result = await pool.query(sql, [username]);
  const user = result.rows[0];

  // Always run bcrypt.compare, even if user is not found.
  // This prevents timing attacks that could reveal valid usernames.
  const dummyHash = '$2b$12$invalidhashusedfortimingprotectiononly000000000000000000';
  const hashToCompare = user ? user.password_hash : dummyHash;
  const passwordMatches = await bcrypt.compare(password, hashToCompare);

  if (!user || !passwordMatches) {
    // Generic message — do not reveal whether username or password was wrong
    throw createError(401, 'Invalid credentials. Please check your username and password.');
  }

  // Sign JWT with minimal payload (never include password or sensitive data)
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };

  const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
    algorithm: 'HS256',
  });

  return {
    token,
    expiresIn: config.jwt.expiresIn,
    admin: {
      id: user.id,
      username: user.username,
      email: user.email,
    },
  };
}

module.exports = { login };
