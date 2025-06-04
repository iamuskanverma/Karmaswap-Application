import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Shield, Heart, Globe, BookOpen, Zap, Gift } from 'lucide-react';
import { Badge as BadgeType } from '../../types';

interface BadgeProps {
  badge: BadgeType;
}

const Badge: React.FC<BadgeProps> = ({ badge }) => {
  const getBadgeIcon = () => {
    switch (badge.icon) {
      case 'award':
        return <Award className="text-white" />;
      case 'star':
        return <Star className="text-white" />;
      case 'shield':
        return <Shield className="text-white" />;
      case 'helping-hand':
        return <Heart className="text-white" />;
      case 'globe':
        return <Globe className="text-white" />;
      case 'book':
        return <BookOpen className="text-white" />;
      case 'flame':
        return <Zap className="text-white" />;
      case 'gift':
        return <Gift className="text-white" />;
      default:
        return <Award className="text-white" />;
    }
  };
  
  const getBadgeColor = () => {
    switch (badge.tier) {
      case 'bronze':
        return 'from-amber-700 to-amber-500';
      case 'silver':
        return 'from-gray-500 to-gray-300';
      case 'gold':
        return 'from-yellow-500 to-amber-300';
      case 'platinum':
        return 'from-cyan-500 to-blue-300';
      default:
        return 'from-amber-700 to-amber-500';
    }
  };
  
  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${getBadgeColor()} flex items-center justify-center shadow-lg mb-2`}>
        {getBadgeIcon()}
      </div>
      <div className="text-center">
        <p className="font-semibold text-sm">{badge.name}</p>
        <p className="text-xs text-gray-500 capitalize">{badge.tier}</p>
      </div>
    </motion.div>
  );
};

export default Badge;