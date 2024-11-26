import React from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

export function LocalImpact() {
  const upcomingEvents = [
    {
      title: "Weekend Food Drive",
      location: "Central Community Center",
      date: "This Saturday, 9AM-2PM",
      spots: "Volunteers needed: 5",
      icon: Users
    },
    {
      title: "Meal Prep Workshop",
      location: "Downtown Kitchen",
      date: "Next Tuesday, 6PM-8PM",
      spots: "8 spots remaining",
      icon: Clock
    }
  ];

  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1">
              <MapPin className="h-4 w-4 text-orange-600 mr-2" />
              <span className="text-sm font-medium text-orange-600">Local Impact</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Make a Difference in Your Neighborhood</h2>
            <p className="text-lg text-gray-600">Join local initiatives and connect with neighbors who are making our community stronger every day.</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                <h3 className="font-semibold text-2xl text-orange-600">150+</h3>
                <p className="text-gray-600 mt-1">Local Volunteers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                <h3 className="font-semibold text-2xl text-orange-600">2,500</h3>
                <p className="text-gray-600 mt-1">Meals Delivered Monthly</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Local Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <event.icon className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-500">{event.location}</p>
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-sm text-gray-500">{event.date}</span>
                      <span className="text-sm font-medium text-orange-600">{event.spots}</span>
                    </div>
                  </div>
                  <div>
                    <button className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600 hover:bg-orange-100 transition-colors duration-200">
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#all-events" className="inline-flex items-center text-orange-600 hover:text-orange-500 font-medium">
                View all local events <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}