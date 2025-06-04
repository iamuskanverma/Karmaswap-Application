import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface KarmaPointsProps {
  points: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const KarmaPoints: React.FC<KarmaPointsProps> = ({ 
  points, 
  showText = false, 
  size = 'md' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-2 py-1';
      case 'lg':
        return 'text-lg px-3 py-2';
      default:
        return 'text-base px-2.5 py-1.5';
    }
  };

  return (
    <motion.div 
      className={`flex items-center space-x-1 bg-primary-50 text-primary-700 rounded-full font-medium ${getSizeClasses()}`}
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Heart className="fill-primary-500 text-primary-500" size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
      <span>{points.toLocaleString()}</span>
      {showText && <span className="ml-1">Karma</span>}
    </motion.div>
  );
};

export default KarmaPoints;