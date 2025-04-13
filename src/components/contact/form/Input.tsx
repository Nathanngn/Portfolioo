import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 
          rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          transition-all duration-200 hover:border-gray-300"
      />
    </div>
  );
}