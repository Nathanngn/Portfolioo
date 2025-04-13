import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText, CheckCircle2 } from 'lucide-react';
import type { Project } from '../../data/projects';
import TechBadge from './TechBadge';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const epicerieProcedures = [
    { name: "Mission 1", url: "/procedures/20240937_NGu_monEpicerie_Mission_1.pdf" },
    { name: "Mission 2", url: "/procedures/20240937_NGu_monEpicerie_Mission_2.pdf" },
    { name: "Mission 5", url: "/procedures/20241041_NGu_monEpicerie_Mission_5.pdf" },
    { name: "Mission 6", url: "/procedures/20241043_NGu_monEpicerie_Mission_6.pdf" },
    { name: "Mission 7", url: "/procedures/20241145_NGu_monEpicerie_Mission_7.pdf" }
  ];

  if (!isOpen) return null;

  const handleProcedureClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="relative h-64">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 
                backdrop-blur-md text-white transition-all duration-300 group"
            >
              <X className="h-5 w-5 transform group-hover:rotate-90 transition-transform" />
            </button>

            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold mb-3"
              >
                {project.title}
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-3"
              >
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg 
                      transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg 
                      transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </motion.div>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-6">
            <div className="space-y-6">
              {/* Technologies */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-50 rounded-xl p-4"
              >
                <p className="text-gray-600">
                  {project.description}
                </p>
              </motion.div>

              {/* Tâches */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Tâches réalisées</h3>
                <div className="grid gap-3">
                  {project.tasks.map((task, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      className="flex items-start gap-3 group p-3 bg-white rounded-lg 
                        hover:shadow-sm transition-all border border-gray-100"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {task}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Boutons Procédures */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center gap-4 pt-4"
              >
                {project.title === "MON EPICERIE" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl">
                    {epicerieProcedures.map((proc, index) => (
                      <button
                        key={index}
                        onClick={() => handleProcedureClick(proc.url)}
                        className="group relative flex items-center justify-center gap-2 bg-gradient-to-r 
                          from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md 
                          hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <FileText className="h-5 w-5 text-white/90 group-hover:text-white transition-colors" />
                        <span className="font-medium">{proc.name}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    onClick={() => handleProcedureClick(project.procedureUrl)}
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r 
                      from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md 
                      hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <FileText className="h-5 w-5 text-white/90 group-hover:text-white transition-colors" />
                    <span className="font-medium">Voir la procédure</span>
                  </button>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}