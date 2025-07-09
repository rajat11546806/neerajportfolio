import React, { useState } from 'react';
import { Github, ExternalLink, Code, Server, Database, Terminal, X } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const projectCategories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'python', name: 'Python', icon: Code },
    { id: 'linux', name: 'Linux', icon: Terminal },
    { id: 'docker', name: 'Docker', icon: Server },
    { id: 'git', name: 'Git & GitHub', icon: Github },
    { id: 'javascript', name: 'JavaScript', icon: Database },
  ];

  const projects = [
    {
      category: 'python',
      title: 'Send Email Using Python',
      description: 'Automated email sending application with SMTP integration',
      tech: ['Python', 'SMTP', 'Email'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'email-automation',
      demoContent: {
        title: 'Email Automation Demo',
        description: 'This Python script automates email sending using SMTP protocol.',
        features: [
          'SMTP server integration',
          'HTML email support',
          'Attachment handling',
          'Bulk email sending',
          'Error handling and logging'
        ],
        code: `import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(to_email, subject, body):
    # SMTP configuration
    smtp_server = "smtp.gmail.com"
    port = 587
    
    # Create message
    msg = MIMEMultipart()
    msg['From'] = "your-email@gmail.com"
    msg['To'] = to_email
    msg['Subject'] = subject
    
    # Add body
    msg.attach(MIMEText(body, 'plain'))
    
    # Send email
    with smtplib.SMTP(smtp_server, port) as server:
        server.starttls()
        server.login("your-email@gmail.com", "your-password")
        server.send_message(msg)
    
    print(f"Email sent successfully to {to_email}")`
      }
    },
    {
      category: 'python',
      title: 'Send SMS Using Python',
      description: 'SMS automation tool with multiple provider support',
      tech: ['Python', 'SMS API', 'Automation'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'sms-automation',
      demoContent: {
        title: 'SMS Automation Demo',
        description: 'Python script for sending SMS messages using various providers.',
        features: [
          'Multiple SMS provider support',
          'Bulk SMS sending',
          'Message scheduling',
          'Delivery status tracking',
          'Cost optimization'
        ],
        code: `import requests
import json

def send_sms(phone_number, message, provider="twilio"):
    if provider == "twilio":
        # Twilio SMS API
        account_sid = "your_account_sid"
        auth_token = "your_auth_token"
        
        url = f"https://api.twilio.com/2010-04-01/Accounts/{account_sid}/Messages.json"
        data = {
            "To": phone_number,
            "From": "your_twilio_number",
            "Body": message
        }
        
        response = requests.post(url, auth=(account_sid, auth_token), data=data)
        return response.json()
    
    return {"error": "Provider not supported"}`
      }
    },
    {
      category: 'python',
      title: 'Make Phone Call Using Python',
      description: 'Voice call automation system with custom messaging',
      tech: ['Python', 'Voice API', 'Automation'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'phone-call'
    },
    {
      category: 'python',
      title: 'Social Media Automation Suite',
      description: 'Automated posting to LinkedIn, Twitter, Facebook, Instagram',
      tech: ['Python', 'Social APIs', 'Automation'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'social-automation'
    },
    {
      category: 'python',
      title: 'WhatsApp Automation Tool',
      description: 'Send WhatsApp messages programmatically',
      tech: ['Python', 'WhatsApp API', 'Automation'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'whatsapp-automation'
    },
    {
      category: 'python',
      title: 'Menu-Driven Automation Tool',
      description: 'Interactive CLI tool for various automation tasks',
      tech: ['Python', 'CLI', 'Menu System'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'menu-automation'
    },
    {
      category: 'linux',
      title: 'Companies Using Linux Benefits',
      description: 'Comprehensive blog on Linux adoption in enterprise',
      tech: ['Linux', 'Research', 'Documentation'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'linux-benefits'
    },
    {
      category: 'linux',
      title: 'Linux GUI Programs Explorer',
      description: 'Explore GUI programs and their terminal commands',
      tech: ['Linux', 'GUI', 'Terminal'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'linux-gui'
    },
    {
      category: 'linux',
      title: 'Custom Linux Program Icons',
      description: 'Customize and manage program icons in Linux',
      tech: ['Linux', 'GUI', 'Customization'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'linux-icons'
    },
    {
      category: 'linux',
      title: 'Linux Terminal Messaging',
      description: 'Send messages via terminal (Email, SMS, WhatsApp, Twitter)',
      tech: ['Linux', 'Terminal', 'APIs'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'terminal-messaging'
    },
    {
      category: 'docker',
      title: 'Docker Enterprise Case Study',
      description: 'Real-world Docker implementation analysis',
      tech: ['Docker', 'Enterprise', 'Case Study'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'docker-case-study'
    },
    {
      category: 'docker',
      title: 'Universal Docker Runner',
      description: 'Run any software in Docker containers',
      tech: ['Docker', 'Containerization', 'Automation'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'docker-runner',
      demoContent: {
        title: 'Universal Docker Runner Demo',
        description: 'A flexible Docker container runner for any application.',
        features: [
          'Multi-platform support',
          'Volume mounting',
          'Port mapping',
          'Environment variables',
          'Resource limits'
        ],
        code: `# Dockerfile
FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && apt-get install -y \\
    python3 \\
    python3-pip \\
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy application files
COPY . .

# Install Python dependencies
RUN pip3 install -r requirements.txt

# Expose port
EXPOSE 8000

# Run application
CMD ["python3", "app.py"]

# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - ./data:/app/data
    environment:
      - DEBUG=True`
      }
    },
    {
      category: 'docker',
      title: 'Apache Docker Deployment',
      description: 'Deploy Apache webserver in Docker container',
      tech: ['Docker', 'Apache', 'Web Server'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'apache-docker'
    },
    {
      category: 'docker',
      title: 'Docker-in-Docker Setup',
      description: 'Advanced DIND configuration and management',
      tech: ['Docker', 'DIND', 'Advanced'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'docker-in-docker'
    },
    {
      category: 'git',
      title: 'Git Repository Automation',
      description: 'Initialize Git repo and push to GitHub automatically',
      tech: ['Git', 'GitHub', 'Automation'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'git-automation'
    },
    {
      category: 'git',
      title: 'Feature Branch Workflow',
      description: 'Create feature branches and merge without conflicts',
      tech: ['Git', 'Branching', 'Workflow'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'feature-branch'
    },
    {
      category: 'javascript',
      title: 'JavaScript Photo Capture',
      description: 'Capture photos using JavaScript and web APIs',
      tech: ['JavaScript', 'Web APIs', 'Camera'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'photo-capture'
    },
    {
      category: 'javascript',
      title: 'Email Video Recorder',
      description: 'Record videos and send via email using JavaScript',
      tech: ['JavaScript', 'Video API', 'Email'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'video-recorder'
    },
    {
      category: 'javascript',
      title: 'Gmail API Integration',
      description: 'Fetch last email info from Gmail using API',
      tech: ['JavaScript', 'Gmail API', 'Integration'],
      github: 'https://github.com/mrneeraj1402',
      demo: 'gmail-api'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my diverse portfolio of automation tools, DevOps solutions, and innovative projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white glow-button'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                }`}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:glow-card transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </a>
                <button
                  onClick={() => setSelectedDemo(project.demo)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">
                  {projects.find(p => p.demo === selectedDemo)?.title} Demo
                </h3>
                <button
                  onClick={() => setSelectedDemo(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {projects.find(p => p.demo === selectedDemo)?.demoContent ? (
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {projects.find(p => p.demo === selectedDemo)?.demoContent?.description}
                  </p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {projects.find(p => p.demo === selectedDemo)?.demoContent?.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Sample Code:</h4>
                    <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                      <code className="text-green-400 text-sm">
                        {projects.find(p => p.demo === selectedDemo)?.demoContent?.code}
                      </code>
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code size={32} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Project Demo</h4>
                  <p className="text-gray-300 mb-6">
                    This project demonstrates {projects.find(p => p.demo === selectedDemo)?.title.toLowerCase()} functionality.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="text-white font-medium mb-2">What this project does:</h5>
                      <p className="text-gray-300 text-sm">
                        {projects.find(p => p.demo === selectedDemo)?.description}
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="text-white font-medium mb-2">Technologies used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {projects.find(p => p.demo === selectedDemo)?.tech.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;