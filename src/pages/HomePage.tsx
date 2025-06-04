import React from 'react';
import DeedForm from '../components/home/DeedForm';
import DeedsFeed from '../components/home/DeedsFeed';
import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto">
        {isAuthenticated && <DeedForm />}
        <DeedsFeed />
      </div>
    </div>
  );
};

export default HomePage;