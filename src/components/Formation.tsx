import React from 'react';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionTitle from './ui/SectionTitle';
import Timeline from './timeline/Timeline';

export default function Formation() {
  return (
    <Section id="formation" className="bg-gray-50">
      <Container>
        <SectionTitle 
          title="Formation" 
          subtitle="Mon parcours académique dans le domaine du numérique"
        />
        <Timeline />
      </Container>
    </Section>
  );
}