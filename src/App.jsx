import React from 'react';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProfessionalTraining from './components/ProfessionalTraining';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningJourney from './components/LearningJourney';
import EducationExperience from './components/EducationExperience';
import LearningRoadmap from './components/LearningRoadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background Interactive Canvas */}
      <CyberBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <ProfessionalTraining />
        <Skills />
        <Projects />
        <LearningJourney />
        <EducationExperience />
        <LearningRoadmap />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
