'use strict';

/**
 * contactSchema.js — Zod Validation Schema for Contact Form
 *
 * Validates and sanitizes all fields before they reach the controller.
 * Fields are trimmed and length-capped to prevent oversized inputs.
 *
 * Rules:
 *   name    — 2–100 characters, letters/spaces/hyphens only
 *   email   — valid email format, max 255 chars
 *   subject — 3–200 characters
 *   message — 10–5000 characters
 */

const { z } = require('zod');

const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required.' })
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must not exceed 100 characters.')
    .regex(
      /^[\p{L}\p{M}\s'\-\.]+$/u,
      'Name contains invalid characters.'
    ),

  email: z
    .string({ required_error: 'Email address is required.' })
    .trim()
    .toLowerCase()
    .email('Please provide a valid email address.')
    .max(255, 'Email address must not exceed 255 characters.'),

  subject: z
    .string({ required_error: 'Subject is required.' })
    .trim()
    .min(3, 'Subject must be at least 3 characters.')
    .max(200, 'Subject must not exceed 200 characters.'),

  message: z
    .string({ required_error: 'Message is required.' })
    .trim()
    .min(10, 'Message must be at least 10 characters.')
    .max(5000, 'Message must not exceed 5000 characters.'),
});

module.exports = { contactSchema };
