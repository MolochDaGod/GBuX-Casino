'use client';

import React from 'react';
import { useNFTAssets } from '@/hooks/useNFTAssets';
import { useWallet } from '@solana/wallet-adapter-react';

export default function CollectionPage() {
  const { connected } = useWallet();
  const { nftAssets, loading } = useNFTAssets();

  if (!connected) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">🖼️</div>
        <h1 className="text-4xl font-bold mb-4 text-grudge-primary">NFT Collection</h1>
        <p className="text-gray-400 text-lg mb-8">
          Connect your wallet to view your NFT collection
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-grudge-gold to-grudge-primary bg-clip-text text-transparent">
          Your NFT Collection
        </h1>
        <p className="text-gray-400 text-lg">
          These NFTs power your gaming experience
        </p>
      </div>

      {loading ? (
        <div className="text-center py-16">
          <div className="animate-spin w-16 h-16 border-4 border-grudge-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your NFTs...</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nftAssets.map((nft) => (
            <div key={nft.mint} className="card hover:scale-105 transition-transform">
              <div className="text-6xl text-center mb-4">
                {nft.mint === '1' && '💎'}
                {nft.mint === '2' && '💍'}
                {nft.mint === '3' && '💚'}
                {nft.mint === '4' && '💙'}
                {nft.mint === '5' && '🪙'}
                {nft.mint === '6' && '7️⃣'}
                {nft.mint === '7' && '🍒'}
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-grudge-primary">
                {nft.name}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Rarity:</span>
                  <span className="text-grudge-gold font-semibold">{nft.rarity}%</span>
                </div>
                {nft.attributes.map((attr, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-400">{attr.trait_type}:</span>
                    <span className="text-grudge-text">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && nftAssets.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-6">📭</div>
          <h2 className="text-2xl font-bold mb-4 text-grudge-primary">No NFTs Found</h2>
          <p className="text-gray-400">
            You don't have any NFTs in this collection yet.
          </p>
        </div>
      )}
    </div>
  );
}
