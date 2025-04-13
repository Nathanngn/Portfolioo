import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import SocialLinks from './SocialLinks';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-end pb-32"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&q=80&w=2000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/75" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8">
            {/* Main heading with gradient text */}
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
                Étudiant en BTS SIO SISR
              </span>
            </h1>

            {/* Name with special styling */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500/20 blur-lg transform -skew-x-12" />
              <h2 className="relative text-2xl md:text-3xl font-bold text-white tracking-wide">
                Nathan GUENON
              </h2>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col items-center justify-center gap-6 pt-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button 
                  href="#projects"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 
                    hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl
                    transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <span className="relative z-10">Découvrir mes projets</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 
                    group-hover:opacity-20 transition-opacity duration-300" />
                </Button>
                <SocialLinks />
              </div>

              {/* New scroll indicator with enhanced design */}
              <div className="mt-16">
                <a 
                  href="#projects" 
                  className="group inline-flex flex-col items-center transition-transform hover:-translate-y-1"
                >
                  <span className="text-sm font-medium text-gray-400 group-hover:text-blue-400 
                    tracking-wider uppercase mb-4 transition-colors">
                    Scroll pour découvrir
                  </span>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 
                      opacity-50 blur-lg group-hover:opacity-75 transition-opacity rounded-full scale-150" />
                    <div className="relative flex items-center justify-center w-12 h-12 
                      bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-full 
                      p-3 shadow-lg group-hover:shadow-blue-500/50 transition-all">
                      <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-600 
                        to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <ChevronDown className="h-6 w-6 text-white relative z-10 animate-bounce" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}