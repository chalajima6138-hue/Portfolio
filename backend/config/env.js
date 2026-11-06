'use strict';

/**
 * env.js — Environment Variable Validation & Configuration
 *
 * Reads process.env, validates required variables, and exports
 * a typed config object used throughout the application.
 * Fails fast at startup if required variables are missing.
 */

const path = require('path');

// Load .env file in development (production uses real env vars)
if (process.env.NODE_ENV !== 'production') {
  try {
    require('fs');
    const fs = require('fs');
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
        if (key && !(key in process.env)) {
          process.env[key] = val;
        }
      }
    }
  } catch {
    // .env not found — that's fine in CI or if vars are set externally
  }
}

/**
 * Retrieve a required environment variable.
 * Throws a descriptive error at startup if missing.
 */
function required(key, description) {
  const value = process.env[key];
  if (!value || value.trim() === '') {
    throw new Error(
      `[Config] Missing required environment variable: ${key}\n` +
      `  Description: ${description}\n` +
      `  Copy backend/.env.example to backend/.env and fill in your values.`
    );
  }
  return value.trim();
}

/**
 * Retrieve an optional environment variable with a default.
 */
function optional(key, defaultValue) {
  const value = process.env[key];
  return (value && value.trim() !== '') ? value.trim() : defaultValue;
}

/**
 * Parse an integer env var with a fallback.
 */
function optionalInt(key, defaultValue) {
  const value = process.env[key];
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : defaultValue;
}

// ---- Build and export the config object ----
const config = {
  // Server
  nodeEnv: optional('NODE_ENV', 'development'),
  port: optionalInt('PORT', 4000),
  isDev: optional('NODE_ENV', 'development') === 'development',
  isProd: optional('NODE_ENV', 'development') === 'production',

  // Database
  database: {
    url: optional('DATABASE_URL', null),
    host: optional('DB_HOST', 'localhost'),
    port: optionalInt('DB_PORT', 5432),
    name: optional('DB_NAME', 'portfolio_db'),
    user: optional('DB_USER', 'postgres'),
    password: optional('DB_PASSWORD', ''),
  },

  // JWT
  jwt: {
    secret: null,         // set below after validation
    expiresIn: optional('JWT_EXPIRES_IN', '8h'),
  },

  // Rate limiting
  rateLimit: {
    contact: {
      windowMs: optionalInt('RATE_LIMIT_CONTACT_WINDOW_MS', 15 * 60 * 1000), // 15 min
      max: optionalInt('RATE_LIMIT_CONTACT_MAX', 5),
    },
    admin: {
      windowMs: optionalInt('RATE_LIMIT_ADMIN_WINDOW_MS', 15 * 60 * 1000),
      max: optionalInt('RATE_LIMIT_ADMIN_MAX', 10),
    },
    general: {
      windowMs: 15 * 60 * 1000,
      max: optionalInt('RATE_LIMIT_GENERAL_MAX', 100),
    },
  },

  // CORS
  cors: {
    origin: optional('CORS_ORIGIN', 'http://localhost:3000'),
  },
};

// Validate required fields — fail fast
try {
  config.jwt.secret = required('JWT_SECRET', 'Secret key for signing JWT tokens (min 32 chars)');
  if (config.jwt.secret.length < 32) {
    throw new Error('[Config] JWT_SECRET must be at least 32 characters long.');
  }
} catch (err) {
  if (config.isProd) {
    // In production, die immediately
    console.error(err.message);
    process.exit(1);
  } else {
    // In development, warn but continue with a placeholder (tests will override)
    console.warn('[Config] Warning:', err.message);
    console.warn('[Config] Using insecure fallback JWT_SECRET for development. Set a real value in .env.');
    config.jwt.secret = 'INSECURE_DEV_FALLBACK_DO_NOT_USE_IN_PRODUCTION_CHANGE_THIS_NOW';
  }
}

module.exports = config;
