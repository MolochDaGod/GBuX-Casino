'use client';

import React from 'react';
import SlotMachine from '@/components/games/SlotMachine';

export default function SlotsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-grudge-gold to-grudge-primary bg-clip-text text-transparent">
          NFT Slot Machine
        </h1>
        <p className="text-gray-400 text-lg">
          Spin the reels and win big with NFT-powered symbols
        </p>
      </div>

      <SlotMachine />

      {/* Game Rules */}
      <div className="card max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-grudge-primary">How to Play</h3>
        <div className="space-y-3 text-gray-300">
          <p>
            <strong>1. Connect Your Wallet:</strong> Make sure your Solana wallet is connected
          </p>
          <p>
            <strong>2. Set Your Bet:</strong> Choose your bet amount between 0.01 and 10 SOL
          </p>
          <p>
            <strong>3. Spin the Reels:</strong> Click the SPIN button to start the game
          </p>
          <p>
            <strong>4. Win Combinations:</strong> Match 3 or more symbols in a row to win
          </p>
          <p>
            <strong>5. Collect Winnings:</strong> Your winnings are automatically added to your balance
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <h4 className="text-xl font-bold mb-3 text-grudge-primary">Symbol Payouts</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">💎</div>
              <div className="text-sm text-grudge-gold font-bold">50x</div>
              <div className="text-xs text-gray-400">Legendary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💍</div>
              <div className="text-sm text-grudge-gold font-bold">25x</div>
              <div className="text-xs text-gray-400">Epic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💚</div>
              <div className="text-sm text-grudge-gold font-bold">10x</div>
              <div className="text-xs text-gray-400">Rare</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🍒</div>
              <div className="text-sm text-grudge-gold font-bold">2x</div>
              <div className="text-xs text-gray-400">Common</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
