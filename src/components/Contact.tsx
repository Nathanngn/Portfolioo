import React from 'react';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionTitle from './ui/SectionTitle';
import ContactForm from './contact/ContactForm';
import ContactBackground from './contact/ContactBackground';

export default function Contact() {
  return (
    <Section id="contact" className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <ContactBackground />
      <Container className="relative z-10">
        <SectionTitle
          title="Contact"
          subtitle="N'hésitez pas à me contacter pour échanger sur vos projets"
          className="text-white"
        />
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}