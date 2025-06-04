import { User, Deed, Badge, MarketplaceOffer, DeedCategory, OfferCategory, LeaderboardEntry } from '../types';
import { addDays, subDays, format } from 'date-fns';

// Mock Users
export const currentUser: User = {
  id: '1',
  name: 'Alex Johnson',
  username: 'alexj',
  bio: 'Passionate about helping others and making the world a better place!',
  avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  location: 'San Francisco, CA',
  karmaPoints: 728,
  deeds: [],
  badges: [
    {
      id: 'b1',
      name: 'First Deed',
      description: 'Completed your first good deed',
      icon: 'award',
      tier: 'bronze',
      unlockedAt: subDays(new Date(), 90).toISOString(),
    },
    {
      id: 'b2',
      name: 'Helper',
      description: 'Completed 10 good deeds',
      icon: 'helping-hand',
      tier: 'silver',
      unlockedAt: subDays(new Date(), 45).toISOString(),
    },
    {
      id: 'b3',
      name: 'Streak Master',
      description: 'Maintained a 7-day streak',
      icon: 'flame',
      tier: 'gold',
      unlockedAt: subDays(new Date(), 14).toISOString(),
    }
  ],
  joinedAt: subDays(new Date(), 120).toISOString(),
  followers: 42,
  following: 38,
};

// Mock Deeds for Feed
export const mockDeeds: Deed[] = [
  {
    id: 'd1',
    userId: '2',
    title: 'Beach Cleanup',
    description: 'Organized a community beach cleanup and collected over 20 bags of trash.',
    category: DeedCategory.ENVIRONMENT,
    images: ['https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    karmaPoints: 50,
    likes: 24,
    comments: 5,
    createdAt: subDays(new Date(), 2).toISOString(),
    isVerified: true,
  },
  {
    id: 'd2',
    userId: '3',
    title: 'Helped Elderly Neighbor',
    description: 'Helped my elderly neighbor with grocery shopping and house chores.',
    category: DeedCategory.HELPING_OTHERS,
    karmaPoints: 30,
    likes: 18,
    comments: 3,
    createdAt: subDays(new Date(), 3).toISOString(),
    isVerified: true,
  },
  {
    id: 'd3',
    userId: '4',
    title: 'Book Donation',
    description: 'Donated 50 books to the local library for their children\'s reading program.',
    category: DeedCategory.DONATION,
    images: ['https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    karmaPoints: 35,
    likes: 29,
    comments: 7,
    createdAt: subDays(new Date(), 5).toISOString(),
    isVerified: true,
  },
  {
    id: 'd4',
    userId: '1',
    title: 'Volunteer at Food Bank',
    description: 'Spent the weekend volunteering at the local food bank, helping to package meals for those in need.',
    category: DeedCategory.VOLUNTEERING,
    images: ['https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    karmaPoints: 45,
    likes: 32,
    comments: 8,
    createdAt: subDays(new Date(), 7).toISOString(),
    isVerified: true,
  },
  {
    id: 'd5',
    userId: '5',
    title: 'Animal Shelter Support',
    description: 'Volunteered at the animal shelter, walking dogs and cleaning kennels.',
    category: DeedCategory.ANIMALS,
    karmaPoints: 40,
    likes: 27,
    comments: 6,
    createdAt: subDays(new Date(), 10).toISOString(),
    isVerified: true,
  },
];

// Mock Marketplace Offers
export const mockOffers: MarketplaceOffer[] = [
  {
    id: 'o1',
    userId: '2',
    title: 'Professional Resume Review',
    description: 'I\'ll review your resume and provide detailed feedback to help you land your dream job.',
    category: OfferCategory.SKILLS,
    karmaPointsCost: 50,
    image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: subDays(new Date(), 5).toISOString(),
    available: true,
  },
  {
    id: 'o2',
    userId: '3',
    title: 'Homemade Cookies Delivery',
    description: 'Fresh homemade cookies delivered to your doorstep.',
    category: OfferCategory.ITEMS,
    karmaPointsCost: 30,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: subDays(new Date(), 3).toISOString(),
    available: true,
  },
  {
    id: 'o3',
    userId: '4',
    title: 'Digital Art Portrait',
    description: 'I\'ll create a custom digital portrait from your photo.',
    category: OfferCategory.DIGITAL,
    karmaPointsCost: 75,
    image: 'https://images.pexels.com/photos/1888883/pexels-photo-1888883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: subDays(new Date(), 7).toISOString(),
    available: true,
  },
  {
    id: 'o4',
    userId: '5',
    title: 'Web Development Consultation',
    description: '1-hour web development consultation to help with your project or website.',
    category: OfferCategory.SERVICES,
    karmaPointsCost: 100,
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: subDays(new Date(), 10).toISOString(),
    available: true,
  },
];

// Mock Leaderboard
export const mockLeaderboard: LeaderboardEntry[] = [
  {
    userId: '5',
    username: 'emmawilson',
    name: 'Emma Wilson',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    karmaPoints: 1250,
    deedsCount: 42,
    rank: 1,
  },
  {
    userId: '6',
    username: 'michaelb',
    name: 'Michael Brown',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    karmaPoints: 1175,
    deedsCount: 38,
    rank: 2,
  },
  {
    userId: '7',
    username: 'sophiagarcia',
    name: 'Sophia Garcia',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    karmaPoints: 986,
    deedsCount: 31,
    rank: 3,
  },
  {
    userId: '8',
    username: 'davidlee',
    name: 'David Lee',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    karmaPoints: 875,
    deedsCount: 27,
    rank: 4,
  },
  {
    userId: '1',
    username: 'alexj',
    name: 'Alex Johnson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    karmaPoints: 728,
    deedsCount: 23,
    rank: 5,
  },
];

// Populate current user's deeds
currentUser.deeds = mockDeeds.filter(deed => deed.userId === currentUser.id);

// Helper function to get user for a deed
export const getUserForDeed = (deed: Deed): Partial<User> => {
  if (deed.userId === currentUser.id) {
    return {
      id: currentUser.id,
      name: currentUser.name,
      username: currentUser.username,
      avatar: currentUser.avatar,
    };
  }
  
  // Find from leaderboard as a fallback
  const leaderboardUser = mockLeaderboard.find(entry => entry.userId === deed.userId);
  if (leaderboardUser) {
    return {
      id: leaderboardUser.userId,
      name: leaderboardUser.name,
      username: leaderboardUser.username,
      avatar: leaderboardUser.avatar,
    };
  }
  
  // Default fallback
  return {
    id: deed.userId,
    name: 'Anonymous User',
    username: 'anonymous',
    avatar: 'https://images.pexels.com/photos/7656336/pexels-photo-7656336.jpeg?auto=compress&cs=tinysrgb&w=150',
  };
};