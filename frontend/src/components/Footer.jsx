import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400 mb-4">
                {personalInfo.title}
              </p>
              <p className="text-gray-500 text-sm">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="space-y-3 mb-4">
                <p className="text-gray-400 text-sm">{personalInfo.email}</p>
                <p className="text-gray-400 text-sm">{personalInfo.phone}</p>
                <p className="text-gray-400 text-sm">{personalInfo.location}</p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={socialLinks.email}
                  className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>

              {/* Made with love */}
              <p className="text-gray-500 text-sm flex items-center gap-1">
                Made with <Heart className="text-red-500" size={16} fill="currentColor" /> by {personalInfo.name}
              </p>

              {/* Back to top */}
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
