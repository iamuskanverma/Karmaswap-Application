import React from 'react';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';

const LeaderboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Karma Leaderboard</h1>
        <p className="text-gray-600">Discover the most active members of our community</p>
      </div>
      
      <LeaderboardTable />
    </div>
  );
};

export default LeaderboardPage;