import React from 'react';
import { BarChart3, Code2, ShieldCheck, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const focusAreas = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Security-focused project work in API controls and authentication log analysis.'
  },
  {
    icon: Code2,
    title: 'Full-stack development',
    description: 'Building and exploring web interfaces and application services.'
  },
  {
    icon: BarChart3,
    title: 'Data analysis',
    description: 'Developing an analytical direction alongside computer science studies.'
  }
];

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header section-header--left">
          <div className="section-tag">
            <Compass size={14} aria-hidden="true" />
            <span>Profile</span>
          </div>
          <h2 className="section-title" id="about-title">About</h2>
        </div>

        <div className="about-layout">
          <article className="glass-card about-intro">
            <p>{personalInfo.bio}</p>
          </article>
          <div className="about-focus" aria-label="Professional interests">
            {focusAreas.map(({ icon: Icon, title, description }) => (
              <article className="about-focus__item" key={title}>
                <Icon size={18} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
