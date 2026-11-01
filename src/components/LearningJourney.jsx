import React from 'react';
import { Milestone, CheckCircle2, Clock, Calendar, ChevronRight, Binary, Code, Boxes, Database, Layout, Server, ShieldAlert, ShieldCheck, LineChart, Rocket } from 'lucide-react';
import { learningJourney } from '../data/portfolioData';

export default function LearningJourney() {
  const getPhaseIcon = (iconName) => {
    switch (iconName) {
      case 'Binary': return <Binary size={18} />;
      case 'Code': return <Code size={18} />;
      case 'Boxes': return <Boxes size={18} />;
      case 'Database': return <Database size={18} />;
      case 'Layout': return <Layout size={18} />;
      case 'Server': return <Server size={18} />;
      case 'ShieldAlert': return <ShieldAlert size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      case 'LineChart': return <LineChart size={18} />;
      case 'Rocket': return <Rocket size={18} />;
      default: return <Milestone size={18} />;
    }
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'Completed':
        return {
          bg: 'rgba(16, 185, 129, 0.1)',
          border: 'rgba(16, 185, 129, 0.35)',
          color: 'var(--accent-emerald)',
          icon: <CheckCircle2 size={12} />
        };
      case 'In Progress':
        return {
          bg: 'rgba(0, 240, 255, 0.12)',
          border: 'rgba(0, 240, 255, 0.35)',
          color: 'var(--accent-cyan)',
          icon: <Clock size={12} />
        };
      case 'Planned':
        return {
          bg: 'rgba(168, 85, 247, 0.1)',
          border: 'rgba(168, 85, 247, 0.35)',
          color: 'var(--accent-purple)',
          icon: <Calendar size={12} />
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

  return (
    <section id="journey" className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Milestone size={14} />
            <span>Academic &amp; Technical Evolution</span>
          </div>
          <h2 className="section-title">
            Learning Journey Timeline
          </h2>
          <p className="section-subtitle">
            A chronological timeline tracking the evolution from introductory computing theory through systems programming, API security, and applied analytics.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '860px',
            margin: '0 auto',
            paddingLeft: '2.5rem'
          }}
          className="timeline-wrapper"
        >
          {/* Vertical Timeline Guide Line */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '11px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-cyan) 0%, rgba(59, 130, 246, 0.5) 70%, rgba(168, 85, 247, 0.2) 100%)'
            }}
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {learningJourney.map((item, index) => {
              const statusStyle = getStatusChip(item.status);
              return (
                <div
                  key={item.title}
                  style={{
                    position: 'relative'
                  }}
                >
                  {/* Timeline Dot Node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.5rem',
                      top: '1.25rem',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#070b14',
                      border: `2px solid ${item.status === 'Completed' ? 'var(--accent-emerald)' : item.status === 'In Progress' ? 'var(--accent-cyan)' : 'var(--accent-purple)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: item.status === 'In Progress' ? '0 0 12px var(--accent-cyan)' : 'none',
                      zIndex: 2
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: item.status === 'Completed' ? 'var(--accent-emerald)' : item.status === 'In Progress' ? 'var(--accent-cyan)' : 'var(--accent-purple)'
                      }}
                    />
                  </div>

                  {/* Timeline Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '1.5rem 1.75rem',
                      border: item.status === 'In Progress'
                        ? '1px solid rgba(0, 240, 255, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {/* Header Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--accent-cyan)',
                            fontWeight: 700
                          }}
                        >
                          {item.phase}
                        </span>
                        <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                          {item.period}
                        </span>
                      </div>

                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.725rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          background: statusStyle.bg,
                          border: `1px solid ${statusStyle.border}`,
                          color: statusStyle.color
                        }}
                      >
                        {statusStyle.icon}
                        {item.status}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.65rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <span style={{ color: 'var(--accent-cyan)' }}>{getPhaseIcon(item.iconName)}</span>
                      <span>{item.title}</span>
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '1rem'
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Deliverables / Tangible Outcomes */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {item.deliverables.map((d) => (
                        <span
                          key={d}
                          style={{
                            fontSize: '0.725rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                            background: 'rgba(15, 23, 42, 0.9)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#94a3b8'
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
