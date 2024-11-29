import React from 'react';
import { Heart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-orange-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Helping Hands</span>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a>
            <a href="#programs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Programs</a>
            <a href="#volunteer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Volunteer</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</a>
            <a href="#donate" className="inline-flex items-center rounded-full bg-orange-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors duration-200">
              Donate
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
}