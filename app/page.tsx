'use client';

import React from 'react';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import CasinoLogo from '@/components/branding/CasinoLogo';
import { GameType } from '@/types';

const games = [
  {
    type: GameType.SLOTS,
    name: 'Slot Machine',
    description: 'Spin the reels with NFT-powered symbols',
    icon: '🎰',
    available: true,
    path: '/games/slots',
  },
  {
    type: GameType.BLACKJACK,
    name: 'Blackjack',
    description: 'Classic card game - Beat the dealer',
    icon: '🃏',
    available: false,
    path: '/games/blackjack',
  },
  {
    type: GameType.POKER,
    name: 'Poker',
    description: 'Texas Hold\'em with crypto stakes',
    icon: '♠️',
    available: false,
    path: '/games/poker',
  },
  {
    type: GameType.ROULETTE,
    name: 'Roulette',
    description: 'Spin the wheel and place your bets',
    icon: '🎡',
    available: false,
    path: '/games/roulette',
  },
  {
    type: GameType.DICE,
    name: 'Dice',
    description: 'Roll the dice for instant wins',
    icon: '🎲',
    available: false,
    path: '/games/dice',
  },
];

export default function Home() {
  const { connected } = useWallet();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <CasinoLogo />
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Experience the future of online gaming with blockchain-powered fairness and NFT integration
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          {connected ? (
            <Link href="/games/slots" className="btn-primary">
              Start Playing
            </Link>
          ) : (
            <div className="btn-secondary cursor-not-allowed opacity-50">
              Connect Wallet to Play
            </div>
          )}
          <Link href="/collection" className="btn-secondary">
            View NFT Collection
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="text-4xl mb-4">🔐</div>
          <h3 className="text-xl font-bold mb-2 text-grudge-primary">Provably Fair</h3>
          <p className="text-gray-400">
            All games use blockchain technology to ensure transparent and verifiable outcomes
          </p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-4">🖼️</div>
          <h3 className="text-xl font-bold mb-2 text-grudge-primary">NFT Integration</h3>
          <p className="text-gray-400">
            Your NFT collection comes alive as game assets with rarity-based rewards
          </p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2 text-grudge-primary">Instant Payouts</h3>
          <p className="text-gray-400">
            Win and receive your SOL instantly with Solana's lightning-fast transactions
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-grudge-gold to-grudge-primary bg-clip-text text-transparent">
          Choose Your Game
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.type}
              className={`card hover:scale-105 transition-transform ${
                game.available ? 'cursor-pointer hover:border-grudge-primary' : 'opacity-60'
              }`}
            >
              {game.available ? (
                <Link href={game.path} className="block">
                  <div className="text-6xl text-center mb-4">{game.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-center text-grudge-primary">
                    {game.name}
                  </h3>
                  <p className="text-gray-400 text-center">{game.description}</p>
                  {game.available && (
                    <div className="mt-4 text-center">
                      <span className="inline-block px-3 py-1 bg-grudge-accent text-grudge-darker rounded-full text-sm font-semibold">
                        Available Now
                      </span>
                    </div>
                  )}
                </Link>
              ) : (
                <div>
                  <div className="text-6xl text-center mb-4 grayscale">{game.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-center text-gray-500">
                    {game.name}
                  </h3>
                  <p className="text-gray-500 text-center">{game.description}</p>
                  <div className="mt-4 text-center">
                    <span className="inline-block px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="card bg-gradient-to-r from-grudge-primary/20 to-grudge-secondary/20 border-grudge-primary">
        <h2 className="text-3xl font-bold text-center mb-8 text-grudge-primary">
          Platform Statistics
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-grudge-gold mb-2">1,234</div>
            <div className="text-gray-400">Total Players</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-grudge-gold mb-2">50,000+</div>
            <div className="text-gray-400">Games Played</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-grudge-gold mb-2">12,345</div>
            <div className="text-gray-400">SOL Wagered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-grudge-gold mb-2">96%</div>
            <div className="text-gray-400">Average RTP</div>
          </div>
        </div>
      </section>
    </div>
  );
}
