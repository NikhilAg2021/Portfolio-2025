import React from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "2+ Years",
      description: "Professional Experience"
    },
    {
      icon: Rocket,
      title: "3+ Projects",
      description: "Successfully Delivered"
    },
    {
      icon: Users,
      title: "50+ Members",
      description: "Team Leadership"
    },
    {
      icon: Award,
      title: "20+ Medals",
      description: "Competition Wins"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img
                  src={personalInfo.aboutImage}
                  alt="About"
                  className="relative rounded-lg w-full h-[400px] object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-white mb-4">
                Building Digital Excellence
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <Icon className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform" size={32} />
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
