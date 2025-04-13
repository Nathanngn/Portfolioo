import React from 'react';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionTitle from './ui/SectionTitle';
import CertificationCard from './certifications/CertificationCard';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <Section id="certifications" className="bg-gradient-to-b from-gray-950 to-gray-900">
      <Container>
        <SectionTitle 
          title="Mes Certifications" 
          subtitle="Cliquez sur une certification pour voir le document PDF"
          className="text-white"
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={cert.title}
              certification={cert}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}