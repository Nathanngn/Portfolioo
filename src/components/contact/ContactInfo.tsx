import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactItem from './ContactItem';
import { contactInfo, socialLinks } from '../../data/contact';

export default function ContactInfo() {
  const socialIcons = [
    { icon: Github, href: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Informations de contact</h3>
      
      <div className="space-y-8">
        <ContactItem
          icon={<Mail className="h-6 w-6 text-blue-600" />}
          title="Email"
          value={contactInfo.email}
          href={`mailto:${contactInfo.email}`}
        />
        <ContactItem
          icon={<Phone className="h-6 w-6 text-blue-600" />}
          title="Téléphone"
          value={contactInfo.phone}
          href={`tel:${contactInfo.phone}`}
        />
        <ContactItem
          icon={<MapPin className="h-6 w-6 text-blue-600" />}
          title="Localisation"
          value={contactInfo.location}
        />
        
        <div className="pt-6 border-t">
          <h4 className="font-semibold text-gray-800 mb-4">Réseaux sociaux</h4>
          <div className="flex space-x-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 
                  transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 transform group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}