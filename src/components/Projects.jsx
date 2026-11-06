import React, { useState } from 'react';
import { Code2, FolderGit2, Layers, Lock, Shield, Info } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Cybersecurity', 'Full-Stack', 'Concepts'];

const categoryIcons = {
  Cybersecurity: Shield,
  'Full-Stack': Code2,
  Concepts: Layers
};

function getStatusColor(statusType) {
  if (statusType === 'completed') return 'var(--accent-emerald)';
  if (statusType === 'confidential') return 'var(--accent-amber)';
  if (statusType === 'concept') return 'var(--accent-cyan)';
  return 'var(--text-secondary)';
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => selectedCategory === 'Concepts'
      ? project.statusType === 'concept'
      : project.category === selectedCategory);

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} aria-hidden="true" />
            <span>Selected Work</span>
          </div>
          <h2 className="section-title" id="projects-title">Projects</h2>
          <p className="section-subtitle">
            Security-focused implementations and software concepts, with their scope clearly identified.
          </p>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`project-filter${selectedCategory === category ? ' is-active' : ''}`}
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}{category === 'All' ? ` (${projects.length})` : ''}
            </button>
          ))}
        </div>

        <div className="project-grid" aria-live="polite">
          {filteredProjects.map((project) => {
            const Icon = categoryIcons[project.category] || Layers;
            const isConfidential = project.isConfidential;
            return (
              <article
                className={`project-card${isConfidential ? ' project-card--confidential' : ''}`}
                key={project.id}
              >
                <div className="project-card__visual" aria-hidden="true">
                  {isConfidential ? <Lock size={19} /> : <Icon size={19} />}
                  <span>{isConfidential ? 'Confidential' : project.category}</span>
                </div>

                <div className="project-card__meta">
                  <span className="project-card__status" style={{ color: getStatusColor(project.statusType) }}>
                    {isConfidential ? 'Private' : project.status}
                  </span>
                  {!isConfidential && <span className="project-card__badge">{project.badge}</span>}
                </div>

                <h3>{project.title}</h3>
                <p className="project-card__subtitle">
                  {isConfidential ? 'Confidential project' : project.subtitle}
                </p>
                <p className="project-card__description">
                  {isConfidential
                    ? 'This project is private; further information is not shared publicly.'
                    : project.shortDescription}
                </p>

                {!isConfidential && (
                  <ul className="project-card__tags" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li className="tech-pill" key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}

                <div className="project-card__actions">
                  {isConfidential ? (
                    <span className="project-card__private">
                      <Lock size={14} aria-hidden="true" />
                      Details withheld
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="btn btn-secondary"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Info size={15} aria-hidden="true" />
                      Project details
                    </button>
                  )}
                  {!isConfidential && project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Source code
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
