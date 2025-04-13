import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AboutSection from './components/about/AboutSection';
import Formation from './components/Formation';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <Formation />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}