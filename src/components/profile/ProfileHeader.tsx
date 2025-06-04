import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { User } from '../../types';
import KarmaPoints from '../shared/KarmaPoints';

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const joinedDate = format(new Date(user.joinedAt), 'MMMM yyyy');
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-32 bg-gradient-to-r from-primary-500 to-primary-700"></div>
      
      <div className="p-4 sm:p-6 relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-16 mb-4">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-24 h-24 rounded-full border-4 border-white object-cover z-10"
          />
          
          <div className="mt-4 sm:mt-0 sm:ml-4 flex-grow">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">@{user.username}</p>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <KarmaPoints points={user.karmaPoints} size="lg" showText={true} />
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{user.bio}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {user.location && (
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{user.location}</span>
            </div>
          )}
          
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>Joined {joinedDate}</span>
          </div>
          
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span><b>{user.followers}</b> Followers · <b>{user.following}</b> Following</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;