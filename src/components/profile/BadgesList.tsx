import React from 'react';
import { motion } from 'framer-motion';
import { User } from '../../types';
import Badge from '../shared/Badge';

interface BadgesListProps {
  user: User;
}

const BadgesList: React.FC<BadgesListProps> = ({ user }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-4 sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {user.badges.map(badge => (
          <Badge key={badge.id} badge={badge} />
        ))}
      </div>
      
      {user.badges.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No badges earned yet. Start doing good deeds to earn badges!</p>
        </div>
      )}
    </motion.div>
  );
};

export default BadgesList;