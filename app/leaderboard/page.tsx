'use client';

import React from 'react';
import { LeaderboardEntry } from '@/types';

// Mock leaderboard data
const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    walletAddress: '9xQe...7nKp',
    displayName: 'CryptoKing',
    totalWon: 125.5,
    gamesWon: 450,
  },
  {
    rank: 2,
    walletAddress: '5mRt...3jLm',
    displayName: 'SlotMaster',
    totalWon: 98.3,
    gamesWon: 387,
  },
  {
    rank: 3,
    walletAddress: '2kWp...8vNq',
    displayName: 'LuckyDiamond',
    totalWon: 87.6,
    gamesWon: 312,
  },
  {
    rank: 4,
    walletAddress: '7nYt...4hBc',
    displayName: 'GrudgeGamer',
    totalWon: 76.2,
    gamesWon: 289,
  },
  {
    rank: 5,
    walletAddress: '3pQw...9mXt',
    displayName: 'NFTWhale',
    totalWon: 65.8,
    gamesWon: 256,
  },
];

export default function LeaderboardPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-grudge-gold to-grudge-primary bg-clip-text text-transparent">
          Leaderboard
        </h1>
        <p className="text-gray-400 text-lg">
          Top players of all time
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card text-center bg-gradient-to-br from-grudge-gold/20 to-transparent border-grudge-gold">
          <div className="text-4xl mb-2">🥇</div>
          <div className="text-sm text-gray-400">Current Leader</div>
          <div className="text-2xl font-bold text-grudge-gold mt-2">CryptoKing</div>
          <div className="text-lg text-grudge-text">125.5 SOL Won</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-grudge-primary/20 to-transparent border-grudge-primary">
          <div className="text-4xl mb-2">🎰</div>
          <div className="text-sm text-gray-400">Most Games Won</div>
          <div className="text-2xl font-bold text-grudge-primary mt-2">450</div>
          <div className="text-lg text-grudge-text">By CryptoKing</div>
        </div>
        <div className="card text-center bg-gradient-to-br from-grudge-accent/20 to-transparent border-grudge-accent">
          <div className="text-4xl mb-2">💰</div>
          <div className="text-sm text-gray-400">Total Distributed</div>
          <div className="text-2xl font-bold text-grudge-accent mt-2">453.4 SOL</div>
          <div className="text-lg text-grudge-text">All Time</div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4 text-grudge-primary">Rank</th>
                <th className="text-left p-4 text-grudge-primary">Player</th>
                <th className="text-right p-4 text-grudge-primary">Total Won</th>
                <th className="text-right p-4 text-grudge-primary">Games Won</th>
              </tr>
            </thead>
            <tbody>
              {mockLeaderboard.map((entry) => (
                <tr
                  key={entry.rank}
                  className="border-b border-gray-800 hover:bg-grudge-darker transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {entry.rank === 1 && <span className="text-2xl">🥇</span>}
                      {entry.rank === 2 && <span className="text-2xl">🥈</span>}
                      {entry.rank === 3 && <span className="text-2xl">🥉</span>}
                      {entry.rank > 3 && (
                        <span className="text-gray-400 font-bold">#{entry.rank}</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <div className="font-semibold text-grudge-text">
                        {entry.displayName || 'Anonymous'}
                      </div>
                      <div className="text-sm text-gray-400">{entry.walletAddress}</div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-grudge-gold font-bold text-lg">
                      {entry.totalWon.toFixed(2)} SOL
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-grudge-text font-semibold">{entry.gamesWon}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Card */}
      <div className="card bg-gradient-to-r from-grudge-primary/20 to-grudge-secondary/20 border-grudge-primary">
        <h3 className="text-xl font-bold mb-3 text-grudge-primary">How Rankings Work</h3>
        <div className="space-y-2 text-gray-300">
          <p>• Rankings are based on total SOL won across all games</p>
          <p>• Updated in real-time as games are played</p>
          <p>• Only verified wins are counted towards rankings</p>
          <p>• Leaderboard resets monthly with special rewards for top players</p>
        </div>
      </div>
    </div>
  );
}
