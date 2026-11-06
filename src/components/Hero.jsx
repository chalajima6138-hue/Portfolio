import React, { useState } from 'react';
import { ArrowRight, Download, Mail, ShieldCheck, MapPin, Sparkles, Award, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      el.scrollIntoView({ behavior });
    }
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 2rem)',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.75fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid-responsive"
        >
          {/* Left Column: Identity & Positioning */}
          <div>
            
            {/* Status Pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.65rem',
                marginBottom: '1.5rem'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.1)'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981'
                  }}
                />
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                  Third-Year CS @ <span style={{ color: 'var(--accent-cyan)' }}>Jimma University</span>
                </span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(0, 240, 255, 0.08)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.775rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600
                }}
              >
                <Award size={13} />
                <span>INSA 2026 Cybersecurity Trainee</span>
              </div>
            </div>

            {/* Name Presentation */}
            <div style={{ marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Hello, I am
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.75rem, 5vw, 4.25rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  marginTop: '0.25rem',
                  marginBottom: '1rem'
                }}
              >
                {personalInfo.name}
              </h1>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)',
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                color: '#e2e8f0'
              }}
            >
              Building Secure Technology.{' '}
              <span className="text-gradient">Turning Ideas Into Solutions.</span>
            </h2>

            {/* Professional Positioning Subtitle */}
            <p
              style={{
                fontSize: '0.925rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-cyan)',
                fontWeight: 500,
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem 0.65rem'
              }}
            >
              {personalInfo.subtitles.map((title, i) => (
                <span key={title} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{title}</span>
                  {i < personalInfo.subtitles.length - 1 && (
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                  )}
                </span>
              ))}
            </p>

            {/* Bio */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '620px',
                marginBottom: '2rem'
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Call to Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.9rem',
                marginBottom: '2.25rem'
              }}
            >
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn btn-primary"
                style={{ padding: '0.8rem 1.6rem' }}
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('training')}
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.4rem' }}
              >
                <Award size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>INSA Training</span>
              </button>

              <a
                href={personalInfo.cvUrl}
                download="Chala_Jima_CV.pdf"
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.4rem' }}
              >
                <Download size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Download CV</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.4rem' }}
              >
                <Mail size={16} style={{ color: 'var(--accent-blue-light)' }} />
                <span>Contact</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                color: 'var(--text-muted)',
                fontSize: '0.875rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>Jimma, Ethiopia</span>
              </div>

              <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

              <a
                href={personalInfo.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <TelegramIcon size={16} />
                <span>Telegram</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image / Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '380px',
                padding: '2rem 1.75rem',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                boxShadow: '0 0 35px rgba(0, 240, 255, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Photo Area with Resilient Fallback */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(59, 130, 246, 0.2))',
                  border: '2px solid var(--accent-cyan)',
                  boxShadow: '0 0 25px rgba(0, 240, 255, 0.25)',
                  marginBottom: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {!imageError ? (
                  <img
                    src={personalInfo.profileImage.src}
                    alt={personalInfo.profileImage.alt}
                    onError={() => setImageError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      padding: '1rem'
                    }}
                  >
                    <ShieldCheck size={42} style={{ marginBottom: '0.35rem' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.5rem', color: '#ffffff' }}>
                      {personalInfo.preferredName ? personalInfo.preferredName.slice(0, 2).toUpperCase() : 'CJ'}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      Chala Jima
                    </span>
                  </div>
                )}
              </div>

              {/* Identity Details */}
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                {personalInfo.name}
              </h3>

              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.75rem',
                  background: 'rgba(0, 240, 255, 0.08)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(0, 240, 255, 0.25)'
                }}
              >
                Cybersecurity &amp; CS Student
              </div>

              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Jimma University • INSA 2026 Summer Camp Trainee
              </p>

              {/* Direct Quick Channels */}
              <div
                style={{
                  width: '100%',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  textAlign: 'left'
                }}
              >
                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: '0.45rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)')}
                >
                  <Mail size={14} style={{ color: 'var(--accent-cyan)' }} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {personalInfo.socialLinks.email}
                  </span>
                </a>

                <a
                  href={`tel:${personalInfo.socialLinks.phonePrimary}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: '0.45rem 0.65rem',
                    borderRadius: '6px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)')}
                >
                  <Phone size={14} style={{ color: 'var(--accent-emerald)' }} />
                  <span>{personalInfo.socialLinks.phonePrimary}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div
          className="hero-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginTop: '4rem'
          }}
        >
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{
                padding: '1.35rem 1.25rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.25rem'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem'
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)'
                }}
              >
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
