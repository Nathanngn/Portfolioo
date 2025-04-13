import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

interface SkillSectionProps {
  title: string;
  skills: { title: string; items: string[] }[];
}

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
        {title}
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}