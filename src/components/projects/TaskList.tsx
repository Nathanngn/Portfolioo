import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface TaskListProps {
  tasks: string[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      <h4 className="font-semibold text-gray-700 mb-2">Tâches réalisées</h4>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}