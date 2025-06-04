import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Home, ShoppingBag, User, Award, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import KarmaPoints from '../shared/KarmaPoints';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/marketplace', icon: <ShoppingBag size={20} />, label: 'Marketplace' },
    { to: '/leaderboard', icon: <Award size={20} />, label: 'Leaderboard' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <Heart className="text-primary-600 mr-2" size={24} />
          <span className="font-heading font-bold text-xl">KarmaSwap</span>
        </Link>
        
        {user && (
          <div className="hidden md:flex items-center">
            <KarmaPoints points={user.karmaPoints} showText={true} />
          </div>
        )}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md flex items-center space-x-1 transition-colors
                ${location.pathname === link.to
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-20 fade-in">
          <div className="container mx-auto px-4 py-2">
            {user && (
              <div className="py-3 border-b border-gray-200">
                <KarmaPoints points={user.karmaPoints} showText={true} />
              </div>
            )}
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 flex items-center space-x-3 
                    ${location.pathname === link.to
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
              <button
                onClick={logout}
                className="px-4 py-3 text-left text-gray-700 hover:bg-gray-100 flex items-center space-x-3"
              >
                <X size={20} />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;