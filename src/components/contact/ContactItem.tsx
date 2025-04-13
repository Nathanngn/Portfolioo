import React, { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
}

export default function ContactItem({ icon, title, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-center space-x-4 group">
      <div className="p-3 bg-gray-50 rounded-lg text-blue-600 group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">{title}</h4>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-lg transition-colors hover:bg-gray-50"
      >
        {content}
      </a>
    );
  }

  return content;
}