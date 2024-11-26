import React from 'react';
import { ShoppingBag, Clock, Users, ChefHat } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      title: "Emergency Food Support",
      description: "Immediate assistance for families facing food insecurity, providing fresh and nutritious food baskets.",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Community Food Drives",
      description: "Regular food collection events that bring our community together to support local food banks.",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1615897570286-da936a5a9d2c?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Volunteer Network",
      description: "Join our passionate community of volunteers making a real difference in people's lives.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Cooking Resources",
      description: "Empowering families with nutritious recipes and practical meal planning guidance.",
      icon: ChefHat,
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-orange-600 font-medium tracking-wide text-sm uppercase">Our Impact</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Programs That Make a Difference</h2>
          <p className="mt-4 text-lg text-gray-600">Working together to create lasting change in our community.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {programs.map((program) => (
            <div key={program.title} className="relative overflow-hidden rounded-2xl group hover:-translate-y-1 transition-all duration-200">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-64 w-full object-cover rounded-t-2xl transform transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-6 shadow-lg rounded-b-2xl border border-orange-100">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                    <program.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{program.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{program.description}</p>
                <div className="mt-6">
                  <a href="#learn-more" className="inline-flex items-center text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200">
                    Learn more <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}