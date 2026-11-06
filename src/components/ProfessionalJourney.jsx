import React from 'react';
import { BriefcaseBusiness, ShieldCheck } from 'lucide-react';
import { professionalJourney } from '../data/portfolioData';

export default function ProfessionalJourney() {
  return (
    <section id="journey" className="section professional-journey" aria-labelledby="journey-title">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <BriefcaseBusiness size={14} aria-hidden="true" />
            <span>Selected Practical Work</span>
          </div>
          <h2 className="section-title" id="journey-title">Professional Journey</h2>
          <p className="section-subtitle">
            Hands-on work in application security and systems-level security, alongside my computer science studies.
          </p>
        </div>

        <div className="journey-timeline">
          <div className="journey-timeline__line" aria-hidden="true" />
          {professionalJourney.map((item) => (
            <article className="journey-entry" key={item.id}>
              <span className="journey-entry__marker" aria-hidden="true">
                <ShieldCheck size={14} />
              </span>
              <div className="journey-entry__content">
                <p className="journey-entry__eyebrow">{item.subtitle}</p>
                <h3>{item.title}</h3>
                <p className="journey-entry__description">{item.description}</p>
                <ul className="journey-entry__tags" aria-label={`${item.title} technologies`}>
                  {item.technologies.map((technology) => (
                    <li className="tech-pill" key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
