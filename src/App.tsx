import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;