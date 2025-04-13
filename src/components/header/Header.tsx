import React from 'react';
import { Code2, BookOpen, Briefcase, User, Mail, Layout } from 'lucide-react';
import NavLink from './NavLink';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function Header() {
  const isScrolled = useScrollPosition();

  return (
    <header 
      className={`transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 bg-gray-900 shadow-lg' 
          : 'absolute top-0 left-0 right-0 bg-transparent'
      } text-white h-16 z-50`}
    >
      <div className="max-w-7xl mx-auto h-full">
        <nav className="flex items-center justify-between h-full px-4">
          <div className="flex items-center pl-2">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="ml-3 text-xl font-bold">Portfolio</span>
          </div>
          <div className="hidden md:flex space-x-6 pr-2">
            <NavLink href="#about" icon={<User />}>A propos</NavLink>
            <NavLink href="#formation" icon={<BookOpen />}>Formation</NavLink>
            <NavLink href="#projects" icon={<Layout />}>Projets</NavLink>
            <NavLink href="#experience" icon={<Briefcase />}>Expérience</NavLink>
            <NavLink href="#contact" icon={<Mail />}>Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}