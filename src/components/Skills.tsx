import React from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Settings, 
  Cloud, 
  Brain,
  Zap,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'JavaScript', 'Python'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Technologies',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Libraries & Frameworks',
      icon: Database,
      skills: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: ['Git', 'NPM', 'VS Code', 'Canva', 'Docker'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Docker', 'Git', 'CI/CD', 'Linux', 'Automation'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI/MLOps',
      icon: Brain,
      skills: ['ML Infrastructure', 'Automation', 'Prompt Engineering'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const additionalSkills = [
    'Responsive Design',
    'Cross-Browser Compatibility',
    'RESTful APIs',
    'Version Control',
    'Agile Development',
    'Problem Solving'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent solutions
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 hover:glow-card transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 glow-soft`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-purple-500/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
            <Zap className="text-yellow-400 mr-2" size={24} />
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center flex items-center justify-center">
            <GitBranch className="text-green-400 mr-2" size={24} />
            Proficiency Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'DevOps & Automation', level: 90 },
              { name: 'Frontend Development', level: 85 },
              { name: 'Backend Development', level: 80 },
              { name: 'Cloud Technologies', level: 75 },
              { name: 'AI/ML Integration', level: 70 },
              { name: 'Mobile Development', level: 60 }
            ].map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out glow-soft"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;