import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle?: string;
  logo?: string;
  website?: string;
  isLast?: boolean;
  index: number;
}

export default function TimelineItem({ 
  year, 
  title, 
  subtitle, 
  logo, 
  website,
  isLast = false, 
  index 
}: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex items-center group"
    >
      {/* Ligne verticale */}
      {!isLast && (
        <div className="absolute left-1/2 top-24 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-100" />
      )}
      
      {/* Contenu */}
      <div className="w-full grid grid-cols-2 gap-8 items-center">
        {/* Côté gauche */}
        <div className="flex justify-end items-center gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 
            hover:shadow-xl w-[500px] h-[180px] group/card">
            <div className="flex gap-6 items-center h-full">
              {logo && website && (
                <div className="flex-shrink-0">
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group/icon"
                  >
                    <img 
                      src={logo} 
                      alt={`Logo ${title}`} 
                      className="w-24 h-24 object-contain rounded-xl shadow-md bg-white p-2 
                        transition-transform duration-300 group-hover/icon:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 
                      group-hover/icon:bg-black/10 rounded-xl transition-colors">
                      <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover/icon:opacity-100 
                        transform scale-75 group-hover/icon:scale-100 transition-all duration-300" />
                    </div>
                  </a>
                </div>
              )}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Point central et date */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 
              flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold">
            {year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}