import React from 'react';
import { useKarma } from '../../context/KarmaContext';
import OfferCard from '../shared/OfferCard';

const OffersList: React.FC = () => {
  const { offers } = useKarma();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {offers.map(offer => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default OffersList;