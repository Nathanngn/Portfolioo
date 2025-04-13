import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a 
        href="#" 
        className="group relative p-3 bg-gray-800/30 hover:bg-gray-700/30 rounded-xl 
          backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30
          transition-all duration-300 transform hover:scale-110"
        aria-label="GitHub"
      >
        <Github className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
        <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 
          group-hover:opacity-100 blur-xl transition-opacity" />
      </a>
      <a 
        href="#" 
        className="group relative p-3 bg-gray-800/30 hover:bg-gray-700/30 rounded-xl 
          backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30
          transition-all duration-300 transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
        <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 
          group-hover:opacity-100 blur-xl transition-opacity" />
      </a>
      <a 
        href="#" 
        className="group relative p-3 bg-gray-800/30 hover:bg-gray-700/30 rounded-xl 
          backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30
          transition-all duration-300 transform hover:scale-110"
        aria-label="Email"
      >
        <Mail className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
        <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 
          group-hover:opacity-100 blur-xl transition-opacity" />
      </a>
    </div>
  );
}