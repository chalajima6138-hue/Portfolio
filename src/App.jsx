import React from 'react';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProfessionalTraining from './components/ProfessionalTraining';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProfessionalJourney from './components/ProfessionalJourney';
import EducationExperience from './components/EducationExperience';
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
        <ProfessionalJourney />
        <EducationExperience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
