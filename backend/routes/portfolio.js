'use strict';

/**
 * portfolio.js — Public Portfolio Data Routes
 *
 * GET /api/portfolio/projects  — List all public projects
 * GET /api/portfolio/skills    — List all skill categories
 *
 * No authentication required.
 * Full implementation in Phase 4.
 */

const express = require('express');
const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.get('/projects', portfolioController.getProjects);
router.get('/skills', portfolioController.getSkills);

module.exports = router;
