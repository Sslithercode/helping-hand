import React from 'react';
import { Heart, Utensils, Users, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-orange-600 font-medium tracking-wide text-sm uppercase">Your Local Food Support Network</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Nourishing Communities</span>
            <span className="block text-orange-600">Building Hope</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-600 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Join our local network of volunteers and supporters creating positive change in our community through food assistance and support.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a href="/product" className="rounded-full bg-orange-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors duration-200">
              Get Started
            </a>
            <a href="#volunteer" className="rounded-full bg-white px-8 py-3 text-base font-semibold text-orange-600 shadow-sm ring-1 ring-inset ring-orange-200 hover:bg-orange-50 transition-colors duration-200">
              Volunteer Today
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {[
          { icon: Heart, title: 'Neighborhood Support', description: 'Connecting neighbors who care with neighbors in need' },
          { icon: Users, title: 'Local Food Drives', description: 'Community-driven food collection events' },
          { icon: Utensils, title: 'Meal Support', description: 'Fresh, local meals delivered with care' },
          { icon: Calendar, title: 'Recipe Sharing', description: 'Local chefs sharing nutritious meal ideas' },
        ].map((item) => (
          <div key={item.title} className="relative rounded-2xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-4">
              <item.icon className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}