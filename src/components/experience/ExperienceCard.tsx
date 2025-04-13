import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';
import ResponsibilityCard from './ResponsibilityCard';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string;
  location: string;
  website?: string;
  responsibilities: {
    icon: any;
    title: string;
    tasks: string[];
  }[];
}

export default function ExperienceCard({
  company,
  role,
  period,
  logo,
  description,
  location,
  website,
  responsibilities
}: ExperienceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Hero Banner */}
      <div className="relative h-80 w-full">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000&h=800"
          alt="Siège Malakoff Humanis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        {/* Company Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-4 rounded-xl shadow-lg"
            >
              <img 
                src={logo} 
                alt={company}
                className="w-24 h-24 object-contain"
              />
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-bold">{company}</h3>
                  {website && (
                    <a 
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-blue-300 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 transform group-hover:rotate-12 transition-transform" />
                      <span className="text-sm">Site web</span>
                    </a>
                  )}
                </div>
                <p className="text-xl text-blue-300 mb-2">{role}</p>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-6 w-6 text-blue-600" />
            <h4 className="text-xl font-semibold text-gray-800">À propos du poste</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {responsibilities.map((resp, index) => (
            <ResponsibilityCard 
              key={resp.title}
              {...resp}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}