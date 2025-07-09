import React from 'react';
import { Heart, Rocket, ArrowUp, Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/mrneeraj1402'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/neeraj-verma-585899240'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:neerajverma140204@gmail.com'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Neeraj Verma
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              DevOps Engineer passionate about building AI-integrated, resilient infrastructure. 
              Currently pursuing B.Tech in Computer Science at VIT Jaipur while gaining hands-on 
              experience with cloud technologies and automation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200 glow-soft"
                    aria-label={social.name}
                  >
                    <IconComponent className="text-white" size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Summary */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• DevOps & Automation</li>
              <li>• Cloud Technologies</li>
              <li>• Docker & Containerization</li>
              <li>• Python Development</li>
              <li>• MERN Stack</li>
              <li>• Linux & Git</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <Rocket className="text-purple-400" size={20} />
            <span>Made with</span>
            <Heart className="text-red-400 fill-current animate-pulse" size={20} />
            <span>by Neeraj Verma</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">
              © 2024 Neeraj Verma. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200 glow-button"
              aria-label="Scroll to top"
            >
              <ArrowUp className="text-white" size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;