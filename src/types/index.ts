export interface User {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  location?: string;
  karmaPoints: number;
  deeds: Deed[];
  badges: Badge[];
  joinedAt: string;
  followers: number;
  following: number;
}

export interface Deed {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: DeedCategory;
  images?: string[];
  karmaPoints: number;
  likes: number;
  comments: number;
  createdAt: string;
  isVerified: boolean;
}

export enum DeedCategory {
  HELPING_OTHERS = "Helping Others",
  VOLUNTEERING = "Volunteering",
  DONATION = "Donation",
  ENVIRONMENT = "Environment",
  COMMUNITY = "Community",
  ANIMALS = "Animals",
  EDUCATION = "Education",
  OTHER = "Other"
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  unlockedAt: string;
}

export interface MarketplaceOffer {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: OfferCategory;
  karmaPointsCost: number;
  image?: string;
  createdAt: string;
  available: boolean;
}

export enum OfferCategory {
  SKILLS = "Skills & Expertise",
  SERVICES = "Services",
  ITEMS = "Items",
  EXPERIENCES = "Experiences",
  DIGITAL = "Digital Goods",
  OTHER = "Other"
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  name: string;
  avatar: string;
  karmaPoints: number;
  deedsCount: number;
  rank: number;
}