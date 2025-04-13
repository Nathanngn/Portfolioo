import React from 'react';
import { User } from 'lucide-react';

interface PersonalInfoProps {
  name: string;
  title: string;
  description: string;
}

export default function PersonalInfo({ name, title, description }: PersonalInfoProps) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">
        <User className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
      <h4 className="text-xl text-blue-600 mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}