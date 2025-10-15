
import React from 'react';
import { USER_INFO } from '../constants';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="bg-slate-800/50 p-12 rounded-xl max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Bring Your Ideas to Life?
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          I'm currently available for freelance opportunities. If you have a project in mind, a problem to solve, or just want to discuss the possibilities of AI, let's connect.
        </p>
        <a
          href={USER_INFO.upworkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-sky-500/20 hover:bg-sky-600 transform hover:scale-105 transition-all duration-300"
        >
          Hire Me on Upwork
        </a>
      </div>
    </section>
  );
};

export default CTA;
