import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Muskan Verma</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600">About</a>
            <a href="#skills" className="text-gray-700 hover:text-primary-600">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-primary-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>About</a>
              <a href="#skills" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;