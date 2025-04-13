import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SkillCardProps {
  title: string;
  items: string[];
}

export default function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <h3 className="text-xl font-semibold mb-6 text-gray-800 pb-3 border-b border-gray-100">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 group">
            <CheckCircle2 className="h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
            <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}