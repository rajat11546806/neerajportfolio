import React from 'react';
import { GraduationCap, Heart, Target, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 hover:glow-card transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">Education & Background</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A passionate DevOps Engineer currently pursuing B.Tech in Computer Science at VIT Jaipur. 
                Alongside studies, I'm gaining hands-on experience with automation, frontend technologies, 
                Docker, cloud platforms, and full-stack development.
              </p>
            </div>

            <div className="glass-card p-8 hover:glow-card transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="text-purple-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">Values & Focus</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Committed to building AI-integrated, resilient infrastructure with a focus on automation, 
                DevOps best practices, and continuous learning. I believe in creating solutions that 
                are not just functional, but scalable and future-ready.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center glow-strong">
                  <Code2 className="text-white" size={80} />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-spin-slow">
                  <Heart className="text-white" size={20} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Building Tomorrow's Infrastructure
              </h3>
              <p className="text-gray-300">
                Every line of code, every automation script, and every deployment pipeline 
                is crafted with precision and passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;