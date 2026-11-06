import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { insaTrainingData } from '../data/portfolioData';

export default function ProfessionalTraining() {
  return (
    <section id="training" className="section professional-training" aria-labelledby="training-title">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} aria-hidden="true" />
            <span>Professional Development</span>
          </div>
          <h2 className="section-title" id="training-title">Professional Training</h2>
          <p className="section-subtitle">
            Structured cybersecurity training, presented without unverified outcomes or credentials.
          </p>
        </div>

        <article className="training-card">
          <div className="training-card__icon" aria-hidden="true">
            <ShieldCheck size={22} />
          </div>
          <div className="training-card__content">
            <div className="training-card__meta">
              <span>{insaTrainingData.organization}</span>
              <span className="training-card__year">{insaTrainingData.year}</span>
            </div>
            <h3>{insaTrainingData.title}</h3>
            <p>{insaTrainingData.description}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
