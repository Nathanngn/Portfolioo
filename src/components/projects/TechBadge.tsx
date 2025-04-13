import React from 'react';

interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium
      border border-purple-500/20 transform hover:scale-105 hover:bg-purple-500/20 
      transition-all duration-300">
      {tech}
    </span>
  );
}