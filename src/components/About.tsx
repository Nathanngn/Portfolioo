import React from 'react';
import { Server, Shield } from 'lucide-react';
import SkillSection from './skills/SkillSection';
import { infrastructureSkills, securitySkills } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Compétences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Spécialisé en infrastructure et sécurité des systèmes d'information,
            je développe des solutions robustes et sécurisées pour répondre aux besoins des entreprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
            <Server className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
            <p className="text-gray-600">
              Expert en administration système et réseau, virtualisation et cloud computing
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p className="text-gray-600">
              Spécialiste en sécurité des systèmes d'information et cybersécurité
            </p>
          </div>
        </div>

        <div className="space-y-20">
          <SkillSection title="Compétences Infrastructure" skills={infrastructureSkills} />
          <SkillSection title="Compétences Sécurité" skills={securitySkills} />
        </div>
      </div>
    </section>
  );
}