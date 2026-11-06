'use strict';

/**
 * portfolioController.js
 *
 * Serves public portfolio data.
 * Reads from local JS data files (no DB needed for static content).
 */

const { projects } = require('../../src/data/projects');
const { skillCategories } = require('../../src/data/skills');

function getProjects(req, res) {
  // Filter out confidential projects before sending to public API
  const publicProjects = projects.map((p) => {
    if (p.isConfidential) {
      return {
        id: p.id,
        title: p.title,
        subtitle: p.subtitle,
        badge: p.badge,
        category: p.category,
        status: p.status,
        statusType: p.statusType,
        isConfidential: true,
        shortDescription: p.shortDescription,
        technologies: ['Confidential'],
      };
    }
    return p;
  });

  return res.status(200).json({
    success: true,
    data: publicProjects,
    count: publicProjects.length,
    requestId: req.id,
  });
}

function getSkills(req, res) {
  return res.status(200).json({
    success: true,
    data: skillCategories,
    count: skillCategories.length,
    requestId: req.id,
  });
}

module.exports = { getProjects, getSkills };
