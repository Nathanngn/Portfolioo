import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ResponsibilityCardProps {
  icon: any;
  title: string;
  tasks: string[];
  index: number;
}

export default function ResponsibilityCard({
  icon: Icon,
  title,
  tasks,
  index
}: ResponsibilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{task}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}