
import React from 'react';
import { SKILLS } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-white text-center mb-12">{children}</h2>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/50 rounded-xl">
      <SectionTitle>My Tech Stack</SectionTitle>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="group flex flex-col items-center gap-2 p-4">
            <div className="bg-slate-800 p-6 rounded-full text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-slate-300 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
