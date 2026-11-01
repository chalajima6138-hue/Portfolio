import React, { useState } from 'react';
import { FolderGit2, Shield, Lock, ExternalLink, Terminal, Info, ChevronRight, Layers, FileCode, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Cybersecurity', 'Full-Stack', 'Concepts'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === 'Concepts') {
          return p.statusType === 'concept';
        }
        return p.category === selectedCategory;
      });

  const getStatusBadge = (statusType, status) => {
    switch (statusType) {
      case 'completed':
        return {
          bg: 'rgba(16, 185, 129, 0.1)',
          border: 'rgba(16, 185, 129, 0.35)',
          color: 'var(--accent-emerald)',
          text: status
        };
      case 'confidential':
        return {
          bg: 'rgba(245, 158, 11, 0.1)',
          border: 'rgba(245, 158, 11, 0.35)',
          color: 'var(--accent-amber)',
          text: 'Private & Confidential'
        };
      case 'concept':
        return {
          bg: 'rgba(56, 189, 248, 0.1)',
          border: 'rgba(56, 189, 248, 0.35)',
          color: 'var(--accent-cyan)',
          text: 'Concept / Work in Progress'
        };
      default:
        return {
          bg: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.15)',
          color: 'var(--text-secondary)',
          text: status
        };
    }
  };

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Practical Engineering</span>
          </div>
          <h2 className="section-title">
            Featured Projects &amp; Implementations
          </h2>
          <p className="section-subtitle">
            A portfolio of practical projects and architectural concepts. Each project reflects genuine code, tested controls, or conceptual problem-solving.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.55rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                borderRadius: '9999px',
                background: selectedCategory === cat ? 'var(--accent-cyan)' : 'rgba(15, 23, 42, 0.8)',
                color: selectedCategory === cat ? '#070b14' : 'var(--text-secondary)',
                border: selectedCategory === cat ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat} {cat === 'All' ? `(${projects.length})` : ''}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => {
            const badge = getStatusBadge(project.statusType, project.status);
            return (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem',
                  border: project.isConfidential
                    ? '1px solid rgba(245, 158, 11, 0.25)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative'
                }}
              >
                {/* Top Badge Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      background: badge.bg,
                      border: `1px solid ${badge.border}`,
                      color: badge.color
                    }}
                  >
                    {badge.text}
                  </span>

                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.35rem'
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-cyan)',
                    marginBottom: '1rem'
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.75rem'
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '1.25rem'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-secondary"
                    style={{
                      padding: '0.5rem 0.95rem',
                      fontSize: '0.825rem',
                      gap: '0.4rem'
                    }}
                  >
                    <Info size={14} style={{ color: 'var(--accent-cyan)' }} />
                    <span>Deep-Dive &amp; Architecture</span>
                  </button>

                  {project.isConfidential ? (
                    <span
                      title="Proprietary code protected under confidentiality"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        color: 'var(--accent-amber)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <Lock size={13} />
                      <span>Private</span>
                    </span>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        padding: '0.5rem 0.85rem',
                        fontSize: '0.825rem',
                        gap: '0.35rem'
                      }}
                      title="View GitHub repository"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      Concept
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
