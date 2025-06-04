import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Deed, MarketplaceOffer } from '../types';
import { mockDeeds, mockOffers } from '../data/mockData';
import { useAuth } from './AuthContext';

interface KarmaContextType {
  deeds: Deed[];
  offers: MarketplaceOffer[];
  addDeed: (deed: Omit<Deed, 'id' | 'userId' | 'createdAt' | 'likes' | 'comments' | 'isVerified'>) => void;
  likeDeed: (deedId: string) => void;
  claimOffer: (offerId: string) => boolean;
  addOffer: (offer: Omit<MarketplaceOffer, 'id' | 'userId' | 'createdAt' | 'available'>) => void;
}

const KarmaContext = createContext<KarmaContextType | undefined>(undefined);

export const KarmaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [deeds, setDeeds] = useState<Deed[]>(mockDeeds);
  const [offers, setOffers] = useState<MarketplaceOffer[]>(mockOffers);

  const addDeed = (newDeed: Omit<Deed, 'id' | 'userId' | 'createdAt' | 'likes' | 'comments' | 'isVerified'>) => {
    if (!user) return;
    
    const deed: Deed = {
      ...newDeed,
      id: `d${deeds.length + 1}`,
      userId: user.id,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
      isVerified: false, // Initially unverified
    };
    
    setDeeds([deed, ...deeds]);
    
    // In a real app, we would update the user's karma points on the server
    if (user) {
      user.karmaPoints += newDeed.karmaPoints;
    }
  };

  const likeDeed = (deedId: string) => {
    setDeeds(deeds.map(deed => 
      deed.id === deedId ? { ...deed, likes: deed.likes + 1 } : deed
    ));
  };

  const claimOffer = (offerId: string): boolean => {
    if (!user) return false;
    
    const offer = offers.find(o => o.id === offerId);
    if (!offer) return false;
    
    // Check if user has enough karma points
    if (user.karmaPoints < offer.karmaPointsCost) {
      return false;
    }
    
    // Update user's karma points
    user.karmaPoints -= offer.karmaPointsCost;
    
    // Mark the offer as unavailable
    setOffers(offers.map(o => 
      o.id === offerId ? { ...o, available: false } : o
    ));
    
    return true;
  };

  const addOffer = (newOffer: Omit<MarketplaceOffer, 'id' | 'userId' | 'createdAt' | 'available'>) => {
    if (!user) return;
    
    const offer: MarketplaceOffer = {
      ...newOffer,
      id: `o${offers.length + 1}`,
      userId: user.id,
      createdAt: new Date().toISOString(),
      available: true,
    };
    
    setOffers([offer, ...offers]);
  };

  return (
    <KarmaContext.Provider value={{ deeds, offers, addDeed, likeDeed, claimOffer, addOffer }}>
      {children}
    </KarmaContext.Provider>
  );
};

export const useKarma = (): KarmaContextType => {
  const context = useContext(KarmaContext);
  if (context === undefined) {
    throw new Error('useKarma must be used within a KarmaProvider');
  }
  return context;
};