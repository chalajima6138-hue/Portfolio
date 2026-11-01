import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Lock, ArrowUpRight, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { insaTrainingData } from '../data/portfolioData';

export default function ProfessionalTraining() {
  return (
    <section id="training" className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Professional Development</span>
          </div>
          <h2 className="section-title">
            Professional Training
          </h2>
          <p className="section-subtitle">
            Specialized technical training programs focused on practical cybersecurity and national-level defense capabilities.
          </p>
        </div>

        {/* INSA Training Hero Feature Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem 2rem',
            border: '1px solid rgba(0, 240, 255, 0.35)',
            boxShadow: '0 0 35px rgba(0, 240, 255, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Background Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Top Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    background: 'rgba(0, 240, 255, 0.12)',
                    border: '1px solid rgba(0, 240, 255, 0.35)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '6px'
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>{insaTrainingData.program}</span>
                </span>

                <span
                  style={{
                    fontSize: '0.775rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-emerald)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px'
                  }}
                >
                  Year: {insaTrainingData.year}
                </span>
              </div>

              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px'
                }}
              >
                Track: {insaTrainingData.area}
              </span>
            </div>

            {/* Position Title & Organization */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.35rem',
                  lineHeight: 1.25
                }}
              >
                {insaTrainingData.position}
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600
                }}
              >
                {insaTrainingData.organization}
              </p>
            </div>

            {/* Official Description */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '850px',
                marginBottom: '2rem'
              }}
            >
              {insaTrainingData.description}
            </p>

            {/* Focus Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2rem'
              }}
            >
              {insaTrainingData.focusAreas.map((area) => (
                <div
                  key={area.title}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(10, 16, 30, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <span style={{ color: 'var(--accent-cyan)' }}>▹</span>
                    <span>{area.title}</span>
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Verified Transparency Note */}
            <div
              style={{
                padding: '0.9rem 1.2rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(56, 189, 248, 0.05)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5
              }}
            >
              <AlertCircle size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <div>
                <strong>Transparency Note:</strong> {insaTrainingData.disclosure}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
