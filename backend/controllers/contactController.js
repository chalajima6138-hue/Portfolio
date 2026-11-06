'use strict';

/**
 * contactController.js
 *
 * Handles POST /api/contact
 * Delegates to contactService for DB persistence.
 * Full implementation: Phase 4.
 */

const contactService = require('../services/contactService');

async function create(req, res, next) {
  try {
    const { name, email, subject, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'] || null;

    const saved = await contactService.saveMessage({
      name,
      email,
      subject,
      message,
      ipAddress,
      userAgent,
    });

    return res.status(201).json({
      success: true,
      message: 'Your message has been received. Thank you for reaching out!',
      requestId: req.id,
      data: { id: saved.id, createdAt: saved.created_at },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { create };
