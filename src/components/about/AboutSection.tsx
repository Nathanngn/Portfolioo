import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

export default function AboutSection() {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <SectionTitle title="À Propos" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-gray-700">
                Je suis GUENON Nathan, actuellement étudiant en BTS SIO,(Services Informatiques aux Organisations) (Solution d'Infrastructure Systèmes et Réseaux) à l'ISCB de Tours en alternance chez Malakoff Humanis. Passionné par les réseaux et la sécurité informatique c'est donc pour cela que je me suis dirigé vers ce BTS.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
               
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                
              </p>
            </div>
            <div className="flex justify-end pr-24">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/047/546/301/original/analysis-of-cloud-server-computer-performance-vector.jpg"
                alt="Illustration infrastructure"
                className="w-3/4"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}