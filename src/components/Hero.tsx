import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Photo de profil"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-blue-400"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Étudiant en BTS SIO SISR
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Spécialiste en Infrastructure, Systèmes et Réseaux
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors">
            Voir mes projets
          </a>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}