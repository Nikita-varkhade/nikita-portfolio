import React from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import RocketLaunch from './components/RocketLaunch';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans overflow-hidden relative">
      <ParticleBackground />
      <RocketLaunch />
      <CustomCursor />
      <ScrollProgress />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
