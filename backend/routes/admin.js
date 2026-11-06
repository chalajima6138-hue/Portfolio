'use strict';

/**
 * admin.js — Private Admin Routes
 *
 * POST   /api/admin/login             — Authenticate and receive JWT
 * GET    /api/admin/messages          — List all contact messages (auth required)
 * PATCH  /api/admin/messages/:id      — Update message status (auth required)
 * DELETE /api/admin/messages/:id      — Delete a message (auth required)
 * GET    /api/admin/stats             — Dashboard statistics (auth required)
 *
 * Full implementation in Phase 4 & 5.
 */

const express = require('express');
const { adminLimiter } = require('../middleware/rateLimiter');
const { requireAuth } = require('../middleware/auth');
const { validateBody } = require('../middleware/validate');
const { loginSchema } = require('../validators/adminSchema');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Public: login (rate-limited)
router.post('/login', adminLimiter, validateBody(loginSchema), adminController.login);

// Protected: all routes below require a valid JWT
router.use(requireAuth);

router.get('/messages', adminController.listMessages);
router.patch('/messages/:id', adminController.updateMessage);
router.delete('/messages/:id', adminController.deleteMessage);
router.get('/stats', adminController.getStats);

module.exports = router;
