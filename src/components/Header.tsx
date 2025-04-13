import React from 'react';
import { Code2, BookOpen, Briefcase, User, Mail, Layout } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="ml-3 text-xl font-bold">Portfolio SISR</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="flex items-center hover:text-blue-400 transition-colors">
              <User className="h-5 w-5 mr-1" />
              Compétences
            </a>
            <a href="#formation" className="flex items-center hover:text-blue-400 transition-colors">
              <BookOpen className="h-5 w-5 mr-1" />
              Formation
            </a>
            <a href="#projects" className="flex items-center hover:text-blue-400 transition-colors">
              <Layout className="h-5 w-5 mr-1" />
              Projets
            </a>
            <a href="#experience" className="flex items-center hover:text-blue-400 transition-colors">
              <Briefcase className="h-5 w-5 mr-1" />
              Expérience
            </a>
            <a href="#contact" className="flex items-center hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5 mr-1" />
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}