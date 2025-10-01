'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { NFTAsset, SlotSymbol } from '@/types';
import { generateSlotSymbols } from '@/utils/gameUtils';

// Mock NFT data for demonstration
const mockNFTAssets: NFTAsset[] = [
  {
    mint: '1',
    name: 'Diamond',
    image: '/assets/symbols/diamond.svg',
    attributes: [{ trait_type: 'rarity', value: 'legendary' }],
    rarity: 95,
  },
  {
    mint: '2',
    name: 'Ruby',
    image: '/assets/symbols/ruby.svg',
    attributes: [{ trait_type: 'rarity', value: 'epic' }],
    rarity: 75,
  },
  {
    mint: '3',
    name: 'Emerald',
    image: '/assets/symbols/emerald.svg',
    attributes: [{ trait_type: 'rarity', value: 'rare' }],
    rarity: 60,
  },
  {
    mint: '4',
    name: 'Sapphire',
    image: '/assets/symbols/sapphire.svg',
    attributes: [{ trait_type: 'rarity', value: 'uncommon' }],
    rarity: 40,
  },
  {
    mint: '5',
    name: 'Gold Coin',
    image: '/assets/symbols/coin.svg',
    attributes: [{ trait_type: 'rarity', value: 'common' }],
    rarity: 20,
  },
  {
    mint: '6',
    name: 'Lucky Seven',
    image: '/assets/symbols/seven.svg',
    attributes: [{ trait_type: 'rarity', value: 'rare' }],
    rarity: 55,
  },
  {
    mint: '7',
    name: 'Cherry',
    image: '/assets/symbols/cherry.svg',
    attributes: [{ trait_type: 'rarity', value: 'common' }],
    rarity: 25,
  },
];

export function useNFTAssets() {
  const { publicKey } = useWallet();
  const [nftAssets, setNftAssets] = useState<NFTAsset[]>([]);
  const [slotSymbols, setSlotSymbols] = useState<SlotSymbol[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNFTs() {
      if (!publicKey) {
        setNftAssets([]);
        setSlotSymbols([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // In a real implementation, fetch NFTs from Metaplex or similar
        // For now, use mock data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
        setNftAssets(mockNFTAssets);
        setSlotSymbols(generateSlotSymbols(mockNFTAssets));
      } catch (err) {
        setError('Failed to fetch NFT assets');
        console.error('Error fetching NFTs:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchNFTs();
  }, [publicKey]);

  return {
    nftAssets,
    slotSymbols,
    loading,
    error,
  };
}
