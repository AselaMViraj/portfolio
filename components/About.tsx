
import React from 'react';
import { USER_INFO } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-white text-center mb-12">{children}</h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <SectionTitle>About Me</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img
            src="https://picsum.photos/seed/profile/400/400"
            alt={USER_INFO.name}
            className="rounded-full w-64 h-64 mx-auto md:w-full md:h-auto object-cover shadow-2xl shadow-sky-900/50"
          />
        </div>
        <div className="md:w-2/3 text-lg text-slate-400 space-y-4">
          <p>
            Hello! I'm a passionate and results-driven AI Engineer with a strong focus on computer vision and machine learning. My journey in tech began with a fascination for how computers could learn to 'see' and interpret the world around them.
          </p>
          <p>
            Over the years, I've honed my skills in developing and deploying end-to-end machine learning solutions. From creating robust object detection models for real-time applications to building intricate neural networks for medical image analysis, I thrive on tackling challenging problems.
          </p>
          <p>
            My goal is to leverage cutting-edge technology to build practical, efficient, and impactful solutions. I am proficient with the entire ML pipeline, from data collection and preprocessing to model training, evaluation, and deployment using tools like Docker and cloud services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
