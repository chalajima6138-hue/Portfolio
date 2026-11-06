'use strict';

/**
 * adminSchema.js — Zod Validation Schemas for Admin Auth
 *
 * loginSchema: validates admin login credentials.
 *   username — 1–50 characters
 *   password — 1–200 characters (never logged)
 */

const { z } = require('zod');

const loginSchema = z.object({
  username: z
    .string({ required_error: 'Username is required.' })
    .trim()
    .min(1, 'Username cannot be empty.')
    .max(50, 'Username must not exceed 50 characters.'),

  password: z
    .string({ required_error: 'Password is required.' })
    .min(1, 'Password cannot be empty.')
    .max(200, 'Password must not exceed 200 characters.'),
});

module.exports = { loginSchema };
