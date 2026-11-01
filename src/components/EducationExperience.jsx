import React from 'react';
import { GraduationCap, MapPin, BookOpen, Sparkles, Target, Compass, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationExperience() {
  return (
    <section id="education" className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; Targeted Certifications
          </h2>
          <p className="section-subtitle">
            Formal undergraduate Computer Science studies at Jimma University, paired with honest preparation for industry certifications.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* University Education Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem 2rem',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Top Tag */}
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
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-cyan)',
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px'
                  }}
                >
                  {educationData.status}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <MapPin size={13} style={{ color: 'var(--accent-cyan)' }} />
                  <span>{educationData.location}</span>
                </div>
              </div>

              {/* Institution Title */}
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                {educationData.institution}
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.5rem' }}>
                {educationData.degree}
              </p>

              <div
                style={{
                  display: 'inline-block',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-emerald)',
                  marginBottom: '1.25rem'
                }}
              >
                {educationData.stage}
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {educationData.description}
              </p>

              {/* Core Coursework Overview */}
              <div>
                <h4
                  style={{
                    fontSize: '0.825rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <BookOpen size={14} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Foundational Coursework Highlights</span>
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {educationData.coreCoursework.map((course) => (
                    <span
                      key={course}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Integrity Note */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5
              }}
            >
              Academic standing: Third-year Computer Science undergraduate student. Unembellished academic profile with honest representation of studies.
            </div>
          </div>

          {/* Targeted Certifications & Preparation */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem 2rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-blue-light)',
                  marginBottom: '1rem'
                }}
              >
                <Target size={18} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                  Certifications &amp; Milestones
                </h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                {educationData.futureMilestonesNote}
              </p>

              {/* Milestones List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {educationData.targetCertifications.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(10, 16, 30, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <h4 style={{ fontSize: '0.925rem', fontWeight: 600, color: '#ffffff' }}>
                        {item.title}
                      </h4>
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
                        {item.status}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--accent-blue-light)', marginBottom: '0.25rem' }}>
                      Domain: {item.area}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honest Disclosure Callout */}
            <div
              style={{
                marginTop: '1.75rem',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(0, 240, 255, 0.05)',
                border: '1px dashed rgba(0, 240, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <Sparkles size={20} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                <strong style={{ color: '#ffffff' }}>Honest Certification Policy:</strong> No unearned credentials or completed certificates are claimed. All listed credentials represent active, self-driven curriculum preparation.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
