import React from 'react';
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary-600"
                >
                  <Github className="h-5 w-5 mr-1" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary-600"
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;