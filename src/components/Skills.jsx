import React, { useState } from 'react';
import { ShieldCheck, Code2, BarChart3, Cpu, Search, Layers, CheckCircle, Clock, BookOpen, Wrench, Sparkles, Award } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapper helper
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'cybersecurity':
        return <ShieldCheck size={18} />;
      case 'fullstack':
        return <Code2 size={18} />;
      case 'data':
        return <BarChart3 size={18} />;
      case 'computerscience':
        return <Cpu size={18} />;
      default:
        return <Layers size={18} />;
    }
  };

  // Color & Badge style helper for honest proficiency levels
  const getLevelBadge = (level) => {
    switch (level) {
      case 'Project Experience':
        return {
          bg: 'rgba(0, 240, 255, 0.12)',
          border: 'rgba(0, 240, 255, 0.35)',
          color: 'var(--accent-cyan)',
          icon: <Wrench size={11} />
        };
      case 'Practicing':
        return {
          bg: 'rgba(59, 130, 246, 0.12)',
          border: 'rgba(59, 130, 246, 0.35)',
          color: 'var(--accent-blue-light)',
          icon: <CheckCircle size={11} />
        };
      case 'Beginner':
        return {
          bg: 'rgba(245, 158, 11, 0.12)',
          border: 'rgba(245, 158, 11, 0.35)',
          color: 'var(--accent-amber)',
          icon: <Clock size={11} />
        };
      case 'Currently Learning':
      case 'Learning':
        return {
          bg: 'rgba(168, 85, 247, 0.12)',
          border: 'rgba(168, 85, 247, 0.35)',
          color: 'var(--accent-purple)',
          icon: <BookOpen size={11} />
        };
      case 'Studied':
      case 'Coursework Completed':
        return {
          bg: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.35)',
          color: 'var(--accent-emerald)',
          icon: <CheckCircle size={11} />
        };
      default:
        return {
          bg: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.15)',
          color: 'var(--text-secondary)',
          icon: null
        };
    }
  };

  // Filter skills based on tab and search
  const filteredCategories = skillCategories
    .filter((cat) => activeTab === 'all' || cat.id === activeTab)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.context.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Competence</span>
          </div>
          <h2 className="section-title">
            Professional Technical Skills
          </h2>
          <p className="section-subtitle">
            Organized across four distinct technical domains with honest, unembellished proficiency ratings reflecting hands-on projects, training, and ongoing study.
          </p>
        </div>

        {/* Proficiency Level Legend */}
        <div
          className="glass-card"
          style={{
            padding: '1rem 1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Honest Proficiency Standards:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <Wrench size={11} /> Project Experience
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: 'var(--accent-blue-light)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <CheckCircle size={11} /> Practicing
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                color: 'var(--accent-amber)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <Clock size={11} /> Beginner
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: 'var(--accent-purple)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <BookOpen size={11} /> Currently Learning
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: 'var(--accent-emerald)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <CheckCircle size={11} /> Studied
            </span>
          </div>
        </div>

        {/* Filter Controls: Tabs & Search Input */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              background: 'rgba(15, 23, 42, 0.6)',
              padding: '0.35rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '8px',
                background: activeTab === 'all' ? 'var(--accent-cyan)' : 'transparent',
                color: activeTab === 'all' ? '#070b14' : 'var(--text-secondary)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Layers size={14} />
              <span>All 4 Categories</span>
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  background: activeTab === cat.id ? 'var(--accent-cyan)' : 'transparent',
                  color: activeTab === cat.id ? '#070b14' : 'var(--text-secondary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              minWidth: '240px',
              maxWidth: '320px',
              width: '100%'
            }}
          >
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              placeholder="Search skills (e.g., OWASP, Node, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 0.85rem 0.55rem 2.4rem',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredCategories.length === 0 ? (
            <div
              className="glass-card"
              style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'var(--text-muted)'
              }}
            >
              No skills found matching "{searchQuery}". Try a different keyword.
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div
                key={category.id}
                className="glass-card"
                style={{
                  padding: '2rem 1.75rem',
                  border: category.id === 'cybersecurity'
                    ? '1px solid rgba(0, 240, 255, 0.25)'
                    : '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: 'rgba(0, 240, 255, 0.1)',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>
                          {category.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--accent-cyan)',
                            background: 'rgba(0, 240, 255, 0.08)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid rgba(0, 240, 255, 0.2)'
                          }}
                        >
                          {category.badge}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '4px'
                    }}
                  >
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Practical Highlights Callout if available */}
                {category.highlights && (
                  <div
                    style={{
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px dashed rgba(0, 240, 255, 0.2)',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      Practical Highlights:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {category.highlights.map((h, i) => (
                        <li key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <span style={{ color: 'var(--accent-cyan)' }}>▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1rem'
                  }}
                >
                  {category.skills.map((skill) => {
                    const badge = getLevelBadge(skill.level);
                    return (
                      <div
                        key={skill.name}
                        style={{
                          padding: '1rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(10, 16, 30, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          gap: '0.5rem',
                          transition: 'border-color var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)')}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                            {skill.name}
                          </span>
                          
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontSize: '0.7rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 600,
                              padding: '0.2rem 0.5rem',
                              borderRadius: '4px',
                              background: badge.bg,
                              border: `1px solid ${badge.border}`,
                              color: badge.color,
                              flexShrink: 0
                            }}
                          >
                            {badge.icon}
                            {skill.level}
                          </span>
                        </div>

                        <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                          {skill.context}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
