import React from 'react';

interface QualityCardProps {
  title: string;
  description: string;
}

export default function QualityCard({ title, description }: QualityCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h4 className="text-xl font-semibold text-gray-800 mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}