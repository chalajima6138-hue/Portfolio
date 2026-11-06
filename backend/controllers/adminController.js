'use strict';

/**
 * adminController.js
 *
 * Handles private admin routes — requires JWT auth on all except login.
 * Full implementation: Phase 4 & 5.
 */

const authService = require('../services/authService');
const contactService = require('../services/contactService');
const { createError } = require('../middleware/errorHandler');

// POST /api/admin/login
async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      requestId: req.id,
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

// GET /api/admin/messages
async function listMessages(req, res, next) {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 20));
    const status = req.query.status || null;

    const result = await contactService.listMessages({ page, limit, status });
    return res.status(200).json({
      success: true,
      requestId: req.id,
      ...result,
    });
  } catch (err) {
    next(err);
  }
}

// PATCH /api/admin/messages/:id
async function updateMessage(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowed = ['unread', 'read', 'archived'];
    if (!status || !allowed.includes(status)) {
      throw createError(400, `Invalid status. Allowed values: ${allowed.join(', ')}.`);
    }

    const updated = await contactService.updateMessageStatus(id, status);
    if (!updated) throw createError(404, 'Message not found.');

    return res.status(200).json({
      success: true,
      message: 'Message status updated.',
      requestId: req.id,
      data: updated,
    });
  } catch (err) {
    next(err);
  }
}

// DELETE /api/admin/messages/:id
async function deleteMessage(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await contactService.deleteMessage(id);
    if (!deleted) throw createError(404, 'Message not found.');

    return res.status(200).json({
      success: true,
      message: 'Message deleted.',
      requestId: req.id,
    });
  } catch (err) {
    next(err);
  }
}

// GET /api/admin/stats
async function getStats(req, res, next) {
  try {
    const stats = await contactService.getStats();
    return res.status(200).json({
      success: true,
      requestId: req.id,
      data: stats,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { login, listMessages, updateMessage, deleteMessage, getStats };
