import React from 'react';
import CertificationCard from './CertificationCard';
import { certifications } from '../../data/certifications';

export default function CertificationsList() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-10">
      {certifications.map((cert, index) => (
        <CertificationCard key={index} certification={cert} index={index} />
      ))}
    </div>
  );
}
