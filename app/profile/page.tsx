'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletBalance } from '@/hooks/useWalletBalance';

export default function ProfilePage() {
  const { publicKey, connected } = useWallet();
  const { balance } = useWalletBalance();

  if (!connected) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">👤</div>
        <h1 className="text-4xl font-bold mb-4 text-grudge-primary">Profile</h1>
        <p className="text-gray-400 text-lg mb-8">
          Connect your wallet to view your profile
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-grudge-gold to-grudge-primary bg-clip-text text-transparent">
          Player Profile
        </h1>
        <p className="text-gray-400 text-lg">
          Your gaming statistics and history
        </p>
      </div>

      {/* Profile Card */}
      <div className="card max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-grudge-primary to-grudge-secondary flex items-center justify-center text-4xl">
            👤
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-grudge-primary mb-2">
              {publicKey?.toString().slice(0, 8)}...{publicKey?.toString().slice(-8)}
            </h2>
            <div className="text-gray-400">
              Member since: {new Date().toLocaleDateString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Current Balance</div>
            <div className="text-3xl font-bold text-grudge-gold">
              {balance.toFixed(4)} SOL
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card text-center bg-gradient-to-br from-grudge-primary/20 to-transparent">
          <div className="text-sm text-gray-400 mb-2">Total Wagered</div>
          <div className="text-3xl font-bold text-grudge-primary">12.5 SOL</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-grudge-accent/20 to-transparent">
          <div className="text-sm text-gray-400 mb-2">Total Won</div>
          <div className="text-3xl font-bold text-grudge-accent">8.3 SOL</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-grudge-gold/20 to-transparent">
          <div className="text-sm text-gray-400 mb-2">Games Played</div>
          <div className="text-3xl font-bold text-grudge-gold">156</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-grudge-secondary/20 to-transparent">
          <div className="text-sm text-gray-400 mb-2">Win Rate</div>
          <div className="text-3xl font-bold text-grudge-secondary">66%</div>
        </div>
      </div>

      {/* Game History */}
      <div className="card">
        <h3 className="text-2xl font-bold mb-6 text-grudge-primary">Recent Games</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-grudge-darker rounded-lg border border-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">🎰</div>
                <div>
                  <div className="font-semibold text-grudge-text">Slot Machine</div>
                  <div className="text-sm text-gray-400">
                    {new Date(Date.now() - i * 3600000).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${i % 2 === 0 ? 'text-grudge-accent' : 'text-red-400'}`}>
                  {i % 2 === 0 ? '+' : '-'}{(Math.random() * 2).toFixed(2)} SOL
                </div>
                <div className="text-sm text-gray-400">Bet: {(Math.random() * 1).toFixed(2)} SOL</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="card">
        <h3 className="text-2xl font-bold mb-6 text-grudge-primary">Achievements</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-grudge-darker rounded-lg text-center border border-grudge-gold">
            <div className="text-4xl mb-2">🏆</div>
            <div className="font-semibold text-grudge-gold">First Win</div>
            <div className="text-sm text-gray-400">Won your first game</div>
          </div>
          <div className="p-4 bg-grudge-darker rounded-lg text-center border border-grudge-primary">
            <div className="text-4xl mb-2">🎯</div>
            <div className="font-semibold text-grudge-primary">High Roller</div>
            <div className="text-sm text-gray-400">Wagered 10+ SOL</div>
          </div>
          <div className="p-4 bg-grudge-darker rounded-lg text-center border border-gray-700 opacity-50">
            <div className="text-4xl mb-2 grayscale">💎</div>
            <div className="font-semibold text-gray-500">Diamond Hands</div>
            <div className="text-sm text-gray-500">Win 100 games (locked)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
