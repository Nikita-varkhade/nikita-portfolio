import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import RocketLaunch from './components/RocketLaunch';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Journey from './pages/Journey';

function AppContent() {
  const location = useLocation();
  const isJourneyPage = location.pathname === '/journey';

  return (
    <div className="bg-background min-h-screen text-white font-sans overflow-hidden relative">
      <ParticleBackground />
      {!isJourneyPage && <RocketLaunch />}
      <CustomCursor />
      <ScrollProgress />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Process />
            <Contact />
          </main>
        } />
        <Route path="/journey" element={<Journey />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
