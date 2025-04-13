import React from 'react';
import { Server, Shield, Terminal } from 'lucide-react';

interface Experience {
  title: string;
  description: string;
}

interface ExperienceGridProps {
  experiences: Experience[];
}

const icons = [Server, Shield, Terminal];

export default function ExperienceGrid({ experiences }: ExperienceGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {experiences.map((experience, index) => {
        const Icon = icons[index];
        return (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow
              border border-gray-100 group"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform">
              <Icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {experience.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {experience.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}