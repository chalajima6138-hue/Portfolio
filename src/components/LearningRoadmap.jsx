import React, { useState } from 'react';
import { Compass, Shield, Layers, PieChart, Terminal, CheckCircle2, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { learningRoadmap } from '../data/portfolioData';

export default function LearningRoadmap() {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  const getTrackIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <Shield size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'PieChart': return <PieChart size={18} />;
      case 'Terminal': return <Terminal size={18} />;
      default: return <Compass size={18} />;
    }
  };

  return (
    <section id="roadmap" className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Strategic Growth</span>
          </div>
          <h2 className="section-title">
            Professional Development Roadmap
          </h2>
          <p className="section-subtitle">
            A structured plan targeting industry-ready competencies. Forward-looking topics are clearly marked as Learning or Planned.
          </p>
        </div>

        {/* Track Selection Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '2.5rem'
          }}
        >
          {learningRoadmap.map((track, idx) => (
            <button
              key={track.track}
              type="button"
              onClick={() => setSelectedTrackIndex(idx)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                background: selectedTrackIndex === idx ? 'rgba(0, 240, 255, 0.15)' : 'rgba(15, 23, 42, 0.7)',
                color: selectedTrackIndex === idx ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                border: selectedTrackIndex === idx ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {getTrackIcon(track.iconName)}
              <span>{track.track}</span>
            </button>
          ))}
        </div>

        {/* Active Track Roadmap Grid */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem 2rem',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: 'var(--shadow-cyan-glow)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}
              >
                {getTrackIcon(learningRoadmap[selectedTrackIndex].iconName)}
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                  {learningRoadmap[selectedTrackIndex].track}
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  Targeted competencies &amp; future technical milestones
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-cyan)' }}>
                <Clock size={12} /> Learning (Active Study)
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-purple)' }}>
                <Calendar size={12} /> Planned (Upcoming)
              </span>
            </div>
          </div>

          {/* Roadmap Steps */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.1rem'
            }}
          >
            {learningRoadmap[selectedTrackIndex].items.map((item, index) => {
              const isLearning = item.status === 'Learning';
              return (
                <div
                  key={item.name}
                  style={{
                    padding: '1.15rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: isLearning ? 'rgba(15, 23, 42, 0.85)' : 'rgba(10, 16, 30, 0.65)',
                    border: isLearning
                      ? '1px solid rgba(0, 240, 255, 0.25)'
                      : '1px solid rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    transition: 'transform var(--transition-fast)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: isLearning ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                        marginTop: '1px'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                      {item.name}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: isLearning ? 'rgba(0, 240, 255, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                      border: isLearning ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid rgba(168, 85, 247, 0.3)',
                      color: isLearning ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                      flexShrink: 0
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
