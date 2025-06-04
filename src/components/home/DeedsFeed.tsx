import React from 'react';
import { useKarma } from '../../context/KarmaContext';
import DeedCard from '../shared/DeedCard';

const DeedsFeed: React.FC = () => {
  const { deeds } = useKarma();
  
  return (
    <div className="space-y-6">
      {deeds.map(deed => (
        <DeedCard key={deed.id} deed={deed} />
      ))}
    </div>
  );
};

export default DeedsFeed;