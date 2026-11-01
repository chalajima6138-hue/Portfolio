import React, { useState } from 'react';
import { ShieldCheck, Code, BarChart2, Cpu, Lightbulb, Compass, GraduationCap, CheckCircle2, Award } from 'lucide-react';
import { personalInfo, insaTrainingData } from '../data/portfolioData';

export default function About() {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    {
      icon: <ShieldCheck size={22} style={{ color: 'var(--accent-cyan)' }} />,
      title: "Cybersecurity & InfoSec",
      badge: "Primary Direction",
      description: "Investigating web and API security controls, defensive countermeasures, heuristic threat modeling, and host log auditing with MiniIDS."
    },
    {
      icon: <Code size={22} style={{ color: 'var(--accent-blue-light)' }} />,
      title: "Full-Stack Development",
      badge: "Engineering Core",
      description: "Developing end-to-end applications with semantic web interfaces, RESTful middleware pipelines in Node.js/Express, and relational databases."
    },
    {
      icon: <BarChart2 size={22} style={{ color: 'var(--accent-emerald)' }} />,
      title: "Python & Data Analytics",
      badge: "Analytical Direction",
      description: "Extracting actionable insights from data using Python, Pandas, exploratory data analysis (EDA), and clear visual reporting."
    },
    {
      icon: <Cpu size={22} style={{ color: 'var(--accent-purple)' }} />,
      title: "Computer Science Foundations",
      badge: "Theoretical Grounding",
      description: "Grounding software engineering in rigorous fundamentals: data structures, algorithmic complexity, systems architecture, and DBMS principles."
    },
    {
      icon: <Lightbulb size={22} style={{ color: 'var(--accent-amber)' }} />,
      title: "Practical Problem-Solving",
      badge: "Hands-on Focus",
      description: "Applying technology to authentic challenges—such as school administrative workflows (DEL FRE) and cultural tourism (Visit Jimma)."
    }
  ];

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Secure Systems &amp; Practical Engineering
          </h2>
          <p className="section-subtitle">
            Third-year Computer Science undergraduate at Jimma University &amp; INSA 2026 Cybersecurity Trainee, focused on building secure technology.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Narrative Column */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem 2rem',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              position: 'relative'
            }}
          >
            {/* Top Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600
                }}
              >
                <GraduationCap size={15} />
                <span>Jimma University • Year 3 Undergrad</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600
                }}
              >
                <Award size={15} />
                <span>INSA 2026 Cybersecurity Trainee</span>
              </div>
            </div>

            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
                lineHeight: 1.3
              }}
            >
              Building Secure Technology. Turning Ideas Into Solutions.
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.75 }}>
              {personalInfo.aboutExtended.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values checklist */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Honest, transparent representation of current skills, project work, and learning stage</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Focus on defensive cybersecurity controls, API security, and robust software design</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Active engagement in professional training with the Information Network Security Administration (INSA)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Eagerness to contribute to real-world engineering teams and research collaborations</span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card"
                style={{
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {pillar.icon}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: '#ffffff'
                      }}
                    >
                      {pillar.title}
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
                      {pillar.badge}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
