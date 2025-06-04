import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import OffersList from '../components/marketplace/OffersList';
import OfferForm from '../components/marketplace/OfferForm';
import { useAuth } from '../context/AuthContext';

const MarketplacePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showOfferForm, setShowOfferForm] = useState(false);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Karma Marketplace</h1>
          <p className="text-gray-600">Trade your karma points for services and goods</p>
        </div>
        
        {isAuthenticated && (
          <button 
            className="btn-primary"
            onClick={() => setShowOfferForm(true)}
          >
            <PlusCircle size={16} className="mr-1" />
            Create Offer
          </button>
        )}
      </div>
      
      <OffersList />
      
      {showOfferForm && (
        <OfferForm onClose={() => setShowOfferForm(false)} />
      )}
    </div>
  );
};

export default MarketplacePage;