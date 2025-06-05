import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-primary-600"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Muskan Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;