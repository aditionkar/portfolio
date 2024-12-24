import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ProjCard1 from './ProjCard1';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management. ',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop',
    technologies: ['React', 'Firebase', 'Tailwind'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring with interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    technologies: ['React', 'OpenWeather API', 'ChartJS'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring with interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    technologies: ['React', 'OpenWeather API', 'ChartJS'],
    githubLink: '#',
    liveLink: '#'
  }
];

const Projects = () => {
  return (
   
    
    <div className="py-20 md:mt-32 md:mb-14 mt-[15px]">
  <div className="container mx-auto px-6">
    {/* Featured Projects heading with animation */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-white mb-16"
    >
      Featured Projects
    </motion.h2>

    {/* Grid for the project cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-0 gap-8">
      {/* Wrapping the ProjCard1 components inside motion.div for animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ProjCard1 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ProjCard1 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <ProjCard1 />
      </motion.div>
    </div>
  </div>
</div>

   
  );
};



export default Projects;