'use strict';

/**
 * contact.js — Contact Form Route
 *
 * POST /api/contact
 *   Validates input, stores message in DB, returns confirmation.
 *   Protected by: contactLimiter, validateBody(contactSchema)
 *
 * Full implementation in Phase 4.
 */

const express = require('express');
const { contactLimiter } = require('../middleware/rateLimiter');
const { validateBody } = require('../middleware/validate');
const { contactSchema } = require('../validators/contactSchema');
const contactController = require('../controllers/contactController');

const router = express.Router();

// POST /api/contact
router.post(
  '/',
  contactLimiter,
  validateBody(contactSchema),
  contactController.create
);

module.exports = router;
