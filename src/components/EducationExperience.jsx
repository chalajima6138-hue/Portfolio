import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationExperience() {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} aria-hidden="true" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title" id="education-title">Education</h2>
          <p className="section-subtitle">
            Formal computer science education at Jimma University.
          </p>
        </div>

        <article className="education-card">
          <div className="education-card__icon" aria-hidden="true">
            <GraduationCap size={22} />
          </div>
          <div className="education-card__content">
            <div className="education-card__meta">
              <span className="education-card__status">{educationData.status}</span>
              <span className="education-card__location">
                <MapPin size={14} aria-hidden="true" />
                {educationData.location}
              </span>
            </div>
            <h3>{educationData.institution}</h3>
            <p className="education-card__program">{educationData.program}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
