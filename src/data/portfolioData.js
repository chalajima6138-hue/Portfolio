/**
 * CENTRAL PORTFOLIO DATA HUB
 * 
 * Aggregates modularized data sources for Chala Jima:
 * - profile.js: Personal identity, bio, positioning, contact links
 * - skills.js: Four verified skill domains & honest proficiency levels
 * - projects.js: Detailed projects, architecture, testing & limitations
 * - training.js: INSA 2026 Summer Camp, Jimma University education, roadmap & journey
 */

import { profile, navLinks } from './profile';
import { skillCategories } from './skills';
import { projects } from './projects';
import { insaTrainingData, educationData, learningJourney, learningRoadmap } from './training';

// Backward-compatible unified personalInfo object
export const personalInfo = {
  name: profile.fullName,
  preferredName: profile.preferredName,
  role: "Third-Year Computer Science Student",
  institution: "Jimma University, Ethiopia",
  yearOfStudy: "Third Year Undergraduate",
  location: profile.location,
  headline: profile.headline,
  subtitles: profile.positioning,
  bio: profile.bio,
  aboutExtended: profile.aboutExtended,
  socialLinks: {
    github: profile.contact.githubUrl,
    githubUsername: profile.contact.githubUsername,
    linkedin: profile.contact.linkedinUrl,
    email: profile.contact.email,
    phonePrimary: profile.contact.phonePrimary,
    phoneSecondary: profile.contact.phoneSecondary,
    telegram: profile.contact.telegramUrl,
    telegramHandle: profile.contact.telegramHandle
  },
  profileImage: profile.profileImage,
  cvUrl: profile.cvUrl,
  stats: profile.stats
};

// Re-export all modular data structures
export {
  profile,
  navLinks,
  skillCategories,
  projects,
  insaTrainingData,
  educationData,
  learningJourney,
  learningRoadmap
};
