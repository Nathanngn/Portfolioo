import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  children: string;
}

export default function NavLink({ href, icon, children }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="flex items-center hover:text-blue-400 transition-colors"
    >
      <span className="h-5 w-5 mr-1">{icon}</span>
      {children}
    </a>
  );
}