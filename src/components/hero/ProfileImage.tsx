import React from 'react';

export default function ProfileImage() {
  return (
    <div className="relative mb-8 inline-block">
      <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50 animate-pulse" />
      <img
        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=200&h=200"
        alt="Photo de profil"
        className="relative w-32 h-32 rounded-full object-cover border-4 border-blue-400
          shadow-xl transform hover:scale-105 transition-all duration-300"
      />
    </div>
  );
}