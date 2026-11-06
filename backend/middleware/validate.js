'use strict';

/**
 * validate.js — Zod Request Validation Middleware Factory
 *
 * Returns an Express middleware that validates req.body against
 * the provided Zod schema. If validation fails, it passes a ZodError
 * to the centralized error handler (which formats it as a 422 response).
 *
 * Usage:
 *   const { validateBody } = require('../middleware/validate');
 *   const { contactSchema } = require('../validators/contactSchema');
 *   router.post('/contact', validateBody(contactSchema), contactController.create);
 */

/**
 * Validate req.body against a Zod schema.
 * On success, replaces req.body with the parsed (sanitized) data.
 * On failure, calls next(zodError) → handled by errorHandler.
 */
function validateBody(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return next(result.error);
    }
    // Replace req.body with the Zod-parsed output (strips unknown fields)
    req.body = result.data;
    next();
  };
}

module.exports = { validateBody };
