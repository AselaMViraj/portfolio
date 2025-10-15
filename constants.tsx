
import React from 'react';
import type { Project, Skill, NavLink } from './types';

// --- PERSONAL INFORMATION ---
export const USER_INFO = {
  name: 'Asela Madusanka',
  title: 'AI & Machine Learning Engineer',
  bio: "I'm a freelance AI engineer specializing in computer vision and deep learning. I build intelligent systems that solve real-world problems, turning complex data into actionable insights. Let's create something amazing together.",
  upworkUrl: 'https://www.upwork.com/freelancers/~0123456789abcdef',
  githubUrl: 'https://github.com/yourusername',
  linkedinUrl: 'https://www.linkedin.com/in/yourusername',
  email: 'asela.madusanka@email.com',
};

// --- ICONS (as JSX) ---
// Using JSX for icons makes them easily styleable with Tailwind classes
const PythonIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M11.233.254H21.45v5.333H11.233zM2.55 5.587H12.767v5.333H2.55zm9.333 5.333H22.1v5.334H11.883zm-8.45-5.083h4.246v4.246H3.433zM12.767.254h4.246v4.246h-4.246zm0 15.116h4.246v4.247h-4.246zm-9.334 0h4.246v4.247H3.433zM2.55 16.233H12.767v5.334H2.55zM11.233 10.92H21.45v5.334H11.233z" fill="currentColor"/></svg>
);

const TensorFlowIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TensorFlow</title><path d="M12.01 0a12 12 0 100 24 12 12 0 000-24zM8.33 18.2L5 16.59l3.33-1.61zm3.68-1.82l-3.35-1.84 3.35-1.83 3.34 1.83zm.01-5.63l-4.71-2.72 4.7-2.72 4.72 2.72zm.01-7.46a1.13 1.13 0 011.13 1.12v10.51a1.13 1.13 0 11-2.26 0V4.41a1.13 1.13 0 011.13-1.12z" fill="currentColor"/></svg>
);

const PyTorchIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PyTorch</title><path d="M7.05 1.54c.75-.5 1.58-.75 2.55-.75.98 0 1.88.25 2.56.75.68.5.95 1.25.95 2.25v.75h-1.5v-.75c0-.62-.25-1-.6-1.13-.5-.25-.88-.25-1.4 0-.5.25-.75.63-.75 1.13v16.5c0 .5.25.88.75 1.13.5.25.88-.25 1.4 0 .35-.12.6-.5.6-1.13v-5.25h1.5v5.25c0 1-.27 1.75-.95 2.25s-1.58.75-2.56.75c-.97 0-1.8-.25-2.55-.75s-.95-1.25-.95-2.25v-16.5C6.1 2.79 6.3 2.04 7.05 1.54zm9.9 0c.75-.5 1.58-.75 2.55-.75s1.8.25 2.55.75c.75.5.95 1.25.95 2.25v16.5c0 1-.2 1.75-.95 2.25s-1.58.75-2.55.75-1.8-.25-2.55-.75-.95-1.25-.95-2.25V3.79c0-1 .2-1.75 .95-2.25zM4.5 10.5v3h15v-3h-15z" fill="currentColor"/></svg>
);

const OpenCvIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>OpenCV</title><path d="M12.984 6.945c-2.43 0-2.43 3.633 0 3.633s2.43-3.633 0-3.633m6.101 4.541c-2.43 0-2.43 3.633 0 3.633s2.43-3.633 0-3.633m-12.188 0c-2.43 0-2.43 3.633 0 3.633s2.43-3.633 0-3.633M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.992 4.148c3.273 0 3.273 4.883 0 4.883s-3.273-4.883 0-4.883m6.102 7.336c3.273 0 3.273 4.883 0 4.883s-3.273-4.883 0-4.883m-12.188 0c3.273 0 3.273 4.883 0 4.883s-3.273-4.883 0-4.883" fill="currentColor"/></svg>
);

const ScikitLearnIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>scikit-learn</title><path d="m14.238 10.285 4.417-5.064a.434.434 0 0 0-.34-.72h-4.32a.433.433 0 0 0-.403.242l-2.035 3.636m-2.26 4.053-4.417 5.064a.434.434 0 0 0 .34.72h4.32a.434.434 0 0 0 .403-.242l2.035-3.636M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0" fill="currentColor"/></svg>
);

const DockerIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Docker</title><path d="M23.213 9.034h-4.55v4.549h-4.55V9.034H9.56v4.549H5.01v4.549H.452v-4.55H0v10.398c2.31 2.31 5.95 2.87 8.92 2.87h1.41c2.19 0 4.23-.39 6.08-1.1l.13.06c2.38-.99 4.18-2.67 5.2-4.81.18-.38.33-.77.44-1.18V9.034h-.927zM4.94 2.87C4.94 1.29 3.82 0 2.47 0S0 1.29 0 2.87c0 .24.03.48.09.71h4.76c.06-.23.09-.47.09-.71z" fill="currentColor"/></svg>
);


// --- NAVIGATION LINKS ---
export const NAV_LINKS: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
];

// --- SKILLS ---
export const SKILLS: Skill[] = [
  { name: 'Python', icon: <PythonIcon className="w-8 h-8"/> },
  { name: 'TensorFlow', icon: <TensorFlowIcon className="w-8 h-8"/> },
  { name: 'PyTorch', icon: <PyTorchIcon className="w-8 h-8"/> },
  { name: 'OpenCV', icon: <OpenCvIcon className="w-8 h-8"/> },
  { name: 'Scikit-learn', icon: <ScikitLearnIcon className="w-8 h-8"/> },
  { name: 'Docker', icon: <DockerIcon className="w-8 h-8"/> },
];

// --- PROJECTS ---
// Use picsum.photos for placeholder images.
export const PROJECTS: Project[] = [
  {
    title: 'Real-time Object Detection System',
    description: 'Developed a high-performance object detection model using YOLOv8, capable of identifying and tracking multiple objects in real-time video streams. Deployed with Docker for scalability.',
    tags: ['Computer Vision', 'PyTorch', 'YOLOv8', 'OpenCV', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: '#',
  },
  {
    title: 'Image Segmentation for Medical Imaging',
    description: 'Built and trained a U-Net based deep learning model to accurately segment tumors in MRI scans. Achieved a Dice score of 0.92 on the test dataset.',
    tags: ['Deep Learning', 'TensorFlow', 'U-Net', 'Medical Imaging'],
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Facial Emotion Recognition API',
    description: 'Created a REST API that analyzes facial expressions from an image and returns the detected emotion. The model was trained on the FER2013 dataset.',
    tags: ['Machine Learning', 'Keras', 'Flask', 'REST API'],
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: '#',
  },
  {
    title: 'Automated Document Scanner',
    description: 'An application that automatically detects the corners of a document in an image, applies a perspective transform to get a top-down view, and enhances the contrast for readability.',
    tags: ['Computer Vision', 'OpenCV', 'Image Processing'],
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
    githubUrl: 'https://github.com/yourusername/project4',
  },
];
