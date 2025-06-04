import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockLeaderboard } from '../../data/mockData';
import KarmaPoints from '../shared/KarmaPoints';

const LeaderboardTable: React.FC = () => {
  const getRowAnimation = (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: index * 0.1 }
  });
  
  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-500';
      case 2:
        return 'text-gray-400';
      case 3:
        return 'text-amber-700';
      default:
        return 'text-gray-600';
    }
  };
  
  return (
    <div className="card overflow-hidden">
      <div className="p-4 bg-primary-50 border-b border-primary-100">
        <h2 className="text-xl font-semibold text-primary-900">Karma Leaderboard</h2>
        <p className="text-sm text-primary-700">Top users making a difference</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Karma Points
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deeds
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockLeaderboard.map((entry, index) => (
              <motion.tr key={entry.userId} {...getRowAnimation(index)}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {entry.rank <= 3 ? (
                      <Trophy className={`${getMedalColor(entry.rank)} mr-1`} size={16} />
                    ) : null}
                    <span className="text-gray-900 font-medium">{entry.rank}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src={entry.avatar} 
                      alt={entry.name} 
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{entry.name}</div>
                      <div className="text-sm text-gray-500">@{entry.username}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <KarmaPoints points={entry.karmaPoints} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.deedsCount} deeds
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;