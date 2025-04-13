import React from 'react';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionTitle from './ui/SectionTitle';
import ExperienceCard from './experience/ExperienceCard';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section id="experience" className="bg-white">
      <Container>
        <SectionTitle 
          title="Mon Expérience" 
          subtitle="Mon parcours professionnel en alternance"
        />
        <div className="max-w-4xl mx-auto">
          <ExperienceCard {...experience} />
        </div>
      </Container>
    </Section>
  );
}