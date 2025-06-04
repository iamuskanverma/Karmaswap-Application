import React from 'react';
import { useAuth } from '../context/AuthContext';
import ProfileHeader from '../components/profile/ProfileHeader';
import BadgesList from '../components/profile/BadgesList';
import UserDeeds from '../components/profile/UserDeeds';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Profile not available</h1>
        <p className="text-gray-600">Please login to view your profile</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <ProfileHeader user={user} />
        <BadgesList user={user} />
        <UserDeeds user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;