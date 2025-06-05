import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Spring Boot and React.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Task Management System',
    description: 'RESTful API for task management with user authentication.',
    technologies: ['Java', 'Spring Security', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  {
    title: 'Weather Application',
    description: 'Real-time weather tracking application using external APIs.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Docker'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-accent-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-accent-600 to-secondary-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-700">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 hover:text-primary-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5 mr-1" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-secondary-600 hover:text-secondary-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
                  <span>Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;