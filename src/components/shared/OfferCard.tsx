import React from 'react';
import { ShoppingBag, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { MarketplaceOffer } from '../../types';
import { useKarma } from '../../context/KarmaContext';
import { useAuth } from '../../context/AuthContext';
import KarmaPoints from './KarmaPoints';

interface OfferCardProps {
  offer: MarketplaceOffer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const { claimOffer } = useKarma();
  const { user } = useAuth();
  const formattedDate = format(new Date(offer.createdAt), 'MMM d, yyyy');
  
  const handleClaimOffer = () => {
    if (!user) return;
    
    const success = claimOffer(offer.id);
    if (success) {
      alert('Offer claimed successfully!');
    } else {
      alert('Not enough karma points to claim this offer.');
    }
  };
  
  const canAfford = user && user.karmaPoints >= offer.karmaPointsCost;
  
  return (
    <motion.div 
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {offer.image && (
        <div className="h-40 relative">
          <img 
            src={offer.image} 
            alt={offer.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="inline-block bg-white bg-opacity-90 text-gray-800 text-xs px-2 py-1 rounded-full">
              {offer.category}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{formattedDate}</span>
        </div>
        
        <h2 className="text-lg font-semibold mb-2">{offer.title}</h2>
        <p className="text-gray-700 mb-4 flex-grow">{offer.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <KarmaPoints points={offer.karmaPointsCost} />
          
          <button 
            className={`btn ${
              !offer.available 
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                : canAfford 
                  ? 'btn-primary' 
                  : 'bg-gray-200 text-gray-600'
            }`}
            onClick={handleClaimOffer}
            disabled={!offer.available || !canAfford}
          >
            <ShoppingBag size={16} className="mr-1" />
            {!offer.available 
              ? 'Claimed' 
              : canAfford 
                ? 'Claim Offer' 
                : 'Not Enough Karma'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferCard;