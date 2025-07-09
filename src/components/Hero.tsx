import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Code, Server, Zap, Github, Terminal, Brain } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave parameters
    let time = 0;
    const waves = [
      { amplitude: 20, frequency: 0.02, speed: 0.02, color: 'rgba(59, 130, 246, 0.1)' },
      { amplitude: 15, frequency: 0.03, speed: 0.03, color: 'rgba(147, 51, 234, 0.1)' },
      { amplitude: 25, frequency: 0.015, speed: 0.015, color: 'rgba(236, 72, 153, 0.1)' }
    ];

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(0.5, '#1e293b');
      gradient.addColorStop(1, '#0f172a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 2) {
          const mouseInfluence = Math.sin(x * 0.01 + mousePosition.x * 10) * 50;
          const y = canvas.height * 0.7 + 
                   Math.sin(x * wave.frequency + time * wave.speed + index) * wave.amplitude +
                   mouseInfluence * (mousePosition.y - 0.5);
          
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      time += 0.5;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Neeraj_Verma_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 3D carousel: all logos use the same radius, but different angles
  const logos = [
    { icon: Code, name: 'VS Code', color: 'from-blue-500 to-blue-600' },
    { icon: Github, name: 'GitHub', color: 'from-gray-700 to-gray-800' },
    { icon: Terminal, name: 'Linux', color: 'from-yellow-500 to-orange-500' },
    { icon: Brain, name: 'AI', color: 'from-purple-500 to-pink-500' },
    { icon: Server, name: 'DevOps', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, name: 'Automation', color: 'from-red-500 to-pink-500' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Water Wave Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 max-w-xl text-left mb-8 lg:mb-0">
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="text-white" size={20} />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="text-white" size={8} />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Neeraj Verma
              </span>
            </h1>
            <div className="space-y-2 mb-6">
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                DevOps Engineer
              </p>
              <p className="text-base md:text-lg text-gray-400">
                Cloud-Native Architect | MLOps & AIOps Enthusiast
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={downloadResume}
                className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-base shadow-xl hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 min-w-[160px]"
              >
                <span>Download Resume</span>
                <Server size={20} />
              </button>
              <button 
                onClick={scrollToAbout}
                className="flex items-center justify-center gap-2 px-7 py-3 rounded-full border-2 border-purple-400 text-purple-300 font-bold text-base bg-transparent hover:bg-purple-500/10 hover:text-white hover:border-purple-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 min-w-[160px]"
              >
                <span>Explore My Work</span>
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
          {/* Right Side - Profile Image and Orbit */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex-shrink-0 z-10 lg:z-auto">
              {/* Central Profile Photo */}
              <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border-4 border-white/20 shadow-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Responsive 2D Revolving Logos Around Photo */}
              <div className="absolute inset-0 animate-spin-slow z-10" style={{ animationDuration: '20s' }}>
                {logos.map((logo, index) => {
                  const IconComponent = logo.icon;
                  const angle = (index * 360) / logos.length;
                  // Responsive orbit radius
                  let radius = 110; // default mobile
                  if (window.innerWidth >= 1024) radius = 180; // lg+
                  else if (window.innerWidth >= 640) radius = 140; // sm/md
                  // Responsive logo size
                  const logoSize = window.innerWidth >= 1024 ? 20 : 16;
                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 flex items-center justify-center"
                      style={{
                        width: `${logoSize * 2.5}px`,
                        height: `${logoSize * 2.5}px`,
                        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
                      }}
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${logo.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 glow-soft`}>
                        <IconComponent className="text-white" size={logoSize} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-purple-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;