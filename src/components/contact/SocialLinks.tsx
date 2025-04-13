import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../../data/contact';

export default function SocialLinks() {
  const socialIcons = [
    { icon: Github, href: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' }
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialIcons.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-lg text-gray-600 hover:text-blue-600 
            shadow-md hover:shadow-lg transition-all duration-300 group"
          aria-label={label}
        >
          <Icon className="h-6 w-6 transform group-hover:scale-110 transition-transform" />
        </a>
      ))}
    </div>
  );
}