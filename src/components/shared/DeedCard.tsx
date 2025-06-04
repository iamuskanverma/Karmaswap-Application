import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Deed } from '../../types';
import { getUserForDeed } from '../../data/mockData';
import { useKarma } from '../../context/KarmaContext';
import KarmaPoints from './KarmaPoints';

interface DeedCardProps {
  deed: Deed;
}

const DeedCard: React.FC<DeedCardProps> = ({ deed }) => {
  const [liked, setLiked] = useState(false);
  const { likeDeed } = useKarma();
  const user = getUserForDeed(deed);
  
  const handleLike = () => {
    if (!liked) {
      likeDeed(deed.id);
      setLiked(true);
    }
  };
  
  const formattedDate = format(new Date(deed.createdAt), 'MMM d, yyyy');
  
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <h3 className="font-medium text-gray-900">{user.name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
          {deed.isVerified && (
            <div className="ml-auto">
              <div className="flex items-center text-success-600 bg-success-50 px-2 py-0.5 rounded-full text-xs">
                <Award size={14} className="mr-1" />
                Verified
              </div>
            </div>
          )}
        </div>
        
        <h2 className="text-lg font-semibold mb-2">{deed.title}</h2>
        <p className="text-gray-700 mb-3">{deed.description}</p>
        
        <div className="mb-3">
          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
            {deed.category}
          </span>
        </div>
        
        {deed.images && deed.images.length > 0 && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={deed.images[0]} 
              alt={deed.title} 
              className="w-full h-48 object-cover"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex space-x-4">
            <button 
              className={`flex items-center space-x-1 ${liked ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
              onClick={handleLike}
            >
              <Heart className={liked ? 'fill-primary-500' : ''} size={18} />
              <span>{deed.likes + (liked ? 1 : 0)}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
              <MessageCircle size={18} />
              <span>{deed.comments}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
              <Share2 size={18} />
            </button>
          </div>
          
          <KarmaPoints points={deed.karmaPoints} size="sm" />
        </div>
      </div>
    </motion.div>
  );
};

export default DeedCard;