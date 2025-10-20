import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">
              My professional journey
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

            {experience.map((item, index) => (
              <div
                key={item.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-800 border-4 border-gray-700 rounded-full flex items-center justify-center z-10">
                  {item.type === 'work' ? (
                    <Briefcase className="text-blue-400" size={24} />
                  ) : (
                    <GraduationCap className="text-cyan-400" size={24} />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-500">
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm mb-3">
                      <Calendar size={14} />
                      {item.period}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 text-gray-400">
                      <span className="font-semibold text-cyan-400">{item.company}</span>
                      <span className="hidden md:inline">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
