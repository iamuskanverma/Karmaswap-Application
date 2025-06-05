import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm Muskan Verma
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 mb-8">
            <TypeAnimation
              sequence={[
                'Java Developer',
                2000,
                'Backend Engineer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate Java developer from Ayodhya, UP, creating robust and scalable applications
            with modern technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary-600"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary-600"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 text-gray-600 hover:text-primary-600"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;