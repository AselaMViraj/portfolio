
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-inter">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900/20 opacity-50 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
