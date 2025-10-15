
import React from 'react';
import { USER_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          Building the Future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">Intelligent Vision</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-6">{USER_INFO.title}</h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          {USER_INFO.bio}
        </p>
        <div className="flex justify-center items-center gap-4">
          <a
            href={USER_INFO.upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-sky-500/20 hover:bg-sky-600 transform hover:scale-105 transition-all duration-300"
          >
            Hire Me on Upwork
          </a>
          <a
            href="#projects"
            className="border-2 border-slate-500 text-slate-300 font-bold text-lg px-8 py-4 rounded-lg hover:bg-slate-800 hover:border-slate-400 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
