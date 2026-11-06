import React, { useState } from 'react';
import { Code2, Database, Globe2, Layers, Search, ShieldCheck } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  languages: Code2,
  web: Globe2,
  frameworks: Layers,
  database: Database,
  security: ShieldCheck
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchQuery.trim().toLowerCase();

  const visibleCategories = skillCategories
    .filter((category) => activeCategory === 'all' || category.id === activeCategory)
    .map((category) => ({
      ...category,
      visibleSkills: category.skills.filter((skill) =>
        `${skill} ${category.title} ${category.description}`.toLowerCase().includes(query)
      )
    }))
    .filter((category) => category.visibleSkills.length > 0);

  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} aria-hidden="true" />
            <span>Technical Focus</span>
          </div>
          <h2 className="section-title" id="skills-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A focused snapshot of the languages, tools, and security areas represented in my work.
          </p>
        </div>

        <div className="skills-controls">
          <div className="skills-filters" role="group" aria-label="Filter skill categories">
            <button
              type="button"
              className={`skills-filter${activeCategory === 'all' ? ' is-active' : ''}`}
              aria-pressed={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {skillCategories.map((category) => (
              <button
                type="button"
                className={`skills-filter${activeCategory === category.id ? ' is-active' : ''}`}
                aria-pressed={activeCategory === category.id}
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>

          <label className="skills-search">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">Search skills</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search technologies"
            />
          </label>
        </div>

        {visibleCategories.length > 0 ? (
          <div className="skills-grid" aria-live="polite">
            {visibleCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Code2;
              return (
                <article className="skill-category" key={category.id}>
                  <div className="skill-category__header">
                    <span className="skill-category__icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <ul className="skill-tags" aria-label={category.title}>
                    {category.visibleSkills.map((skill) => (
                      <li className="skill-tag" key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="skills-empty" role="status">
            No skills match “{searchQuery}”. Try another search.
          </p>
        )}
      </div>
    </section>
  );
}
