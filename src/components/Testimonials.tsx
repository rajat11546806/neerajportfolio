import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Senior DevOps Engineer',
      company: 'Tech Solutions Inc.',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      feedback: 'Neeraj has exceptional skills in automation and DevOps practices. His Python automation tools saved our team countless hours of manual work.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'Project Manager',
      company: 'Electro IT Solutions',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      feedback: 'During his internship, Neeraj delivered a comprehensive Beverage Order Application that exceeded our expectations. His dedication and technical prowess are remarkable.',
      rating: 5
    },
    {
      name: 'Dr. Amit Patel',
      position: 'Professor',
      company: 'VIT Jaipur',
      photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      feedback: 'Neeraj consistently demonstrates innovation in his projects. His understanding of Docker containerization and Linux systems is impressive for a student.',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      position: 'Frontend Developer',
      company: 'Digital Innovations',
      photo: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
      feedback: 'Collaborated with Neeraj on a full-stack project. His ability to integrate frontend technologies with robust backend solutions is outstanding.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      position: 'Cloud Architect',
      company: 'CloudTech Enterprises',
      photo: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=150',
      feedback: 'Neeraj\'s approach to cloud-native solutions and his eagerness to learn emerging technologies make him a valuable asset to any team.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What colleagues and mentors say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="glass-card p-8 md:p-12 text-center min-h-[400px] flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              <Quote className="text-purple-400 opacity-50" size={48} />
            </div>
            
            <div className="mb-8">
              <img
                src={testimonials[currentTestimonial].photo}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gradient-to-r from-blue-500 to-purple-600 glow-soft"
              />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-gray-300 italic mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].feedback}"
            </blockquote>

            <div>
              <h4 className="text-xl font-semibold text-white mb-1">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-purple-400 mb-1">
                {testimonials[currentTestimonial].position}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonials[currentTestimonial].company}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200 glow-button"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200 glow-button"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 glow-soft'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:glow-card transition-all duration-300 cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-purple-500/50"
              />
              <h4 className="text-lg font-semibold text-white mb-1">{testimonial.name}</h4>
              <p className="text-purple-400 text-sm mb-2">{testimonial.position}</p>
              <p className="text-gray-300 text-xs line-clamp-3">
                "{testimonial.feedback.slice(0, 80)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;