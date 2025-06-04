import React from 'react';
import { motion } from 'framer-motion';
import { User } from '../../types';
import DeedCard from '../shared/DeedCard';

interface UserDeedsProps {
  user: User;
}

const UserDeeds: React.FC<UserDeedsProps> = ({ user }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-4 sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold mb-4">Good Deeds</h2>
      
      <div className="space-y-6">
        {user.deeds.map(deed => (
          <DeedCard key={deed.id} deed={deed} />
        ))}
      </div>
      
      {user.deeds.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No deeds logged yet. Start sharing your good deeds!</p>
        </div>
      )}
    </motion.div>
  );
};

export default UserDeeds;