import React, { useState } from 'react';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './projects/ProjectCard';
import { Table, ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const initialProjectCount = 4;
  const visibleProjects = showAllProjects ? projects : projects.slice(0, initialProjectCount);

  return (
    <Section id="projects" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Container>
        <SectionTitle 
          title="Mes Projets" 
          subtitle="Découvrez les projets sur lesquels j'ai travaillé pendant ma formation"
          className="text-white"
        />
        
        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {projects.length > initialProjectCount && (
          <div className="flex flex-col items-center gap-8">
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group relative w-14 h-14 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg group-hover:bg-purple-500/30 transition-colors" />
              <div className="relative bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full p-4 shadow-lg group-hover:shadow-purple-500/25 transition-all">
                <ChevronDown 
                  className={`h-6 w-6 text-white transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`}
                />
              </div>
            </motion.button>

            <a
              href="/competences.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 
                text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 
                transition-all duration-300 overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                window.open('/competences.pdf', '_blank');
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 
                opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              <Table className="h-6 w-6 text-white/90 group-hover:text-white transition-colors" />
              <span className="font-medium">Tableau détaillé des compétences</span>
            </a>
          </div>
        )}
      </Container>
    </Section>
  );
}