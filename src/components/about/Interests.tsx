import React from 'react';
import { Heart } from 'lucide-react';

interface InterestsProps {
  interests: string[];
}

export default function Interests({ interests }: InterestsProps) {
  return (
    <div>
      <div className="flex items-center justify-center mb-8">
        <Heart className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-2xl font-bold">Centres d'intérêt</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {interests.map((interest, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full
              hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}