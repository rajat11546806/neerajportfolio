import React from 'react';
import { Trophy, Award, Star, BookOpen, Users, Briefcase } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: '1st Place - Inter-City SBD Championship',
      description: 'Champion in competitive programming and system design',
      color: 'from-yellow-500 to-orange-500',
      year: '2024'
    },
    {
      icon: Award,
      title: '16th Place - Hackathon @ VGU 2024',
      description: 'Developed innovative solution under time constraints',
      color: 'from-purple-500 to-pink-500',
      year: '2024'
    },
    {
      icon: Briefcase,
      title: 'Internship - Linux World',
      description: 'Learned Agentic AI using multiple technologies like Python, MLOps, automation, various LLM models, Linux, Full stack, DevOps, generative AIOps, etc.',
      color: 'from-emerald-500 to-teal-500',
      year: '2024'
    },
    {
      icon: Users,
      title: 'Internship - Electro IT Solutions',
      description: 'Built comprehensive Beverage Order Application',
      color: 'from-blue-500 to-cyan-500',
      year: '2023'
    }
  ];

  const certifications = [
    {
      title: 'Frontend Development',
      issuer: 'Electro IT Solution',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'JavaScript Certification',
      issuer: 'Pregrad',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'MERN Stack (Pursuing)',
      issuer: 'NSDC',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Frontend Certification',
      issuer: 'NSDC',
      icon: Award,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey in technology
          </p>
        </div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 text-center hover:glow-card transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4 glow-strong`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-2">Certifications</h3>
          <p className="text-gray-300">Professional credentials and learning milestones</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 text-center hover:glow-card transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mx-auto mb-4 glow-soft`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            By the Numbers
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                4
              </div>
              <div className="text-gray-300">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                4
              </div>
              <div className="text-gray-300">Major Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-300">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;