import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Certification } from '../../data/certifications';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export default function CertificationCard({ certification, index }: CertificationCardProps) {
  const handleClick = () => {
    window.open(certification.pdfUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={handleClick}
      className="group relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg overflow-hidden 
        hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1
        border border-gray-600 hover:border-blue-500"
    >
      <div className="absolute top-0 right-0 p-4">
        <Award className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
      </div>
      
      <div className="p-8">
        <div className="h-32 flex items-center justify-center mb-6 bg-white/95 rounded-lg p-4 
          shadow-inner group-hover:bg-white transition-colors">
          <img
            src={certification.logo}
            alt={certification.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-50 mb-2 group-hover:text-white transition-colors">
            {certification.title}
          </h3>
          <p className="text-gray-200 mb-2 group-hover:text-gray-100 transition-colors">
            {certification.issuer}
          </p>
          <p className="text-sm text-blue-300 font-medium group-hover:text-blue-200 transition-colors">
            {certification.date}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 
        group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}