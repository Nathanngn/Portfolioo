import React from 'react';
import QualityCard from './QualityCard';

interface Quality {
  title: string;
  description: string;
}

interface QualitiesProps {
  qualities: Quality[];
}

export default function Qualities({ qualities }: QualitiesProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8">Qualités</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {qualities.map((quality, index) => (
          <QualityCard key={index} {...quality} />
        ))}
      </div>
    </div>
  );
}