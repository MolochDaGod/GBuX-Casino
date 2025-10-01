'use client';

import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useNFTAssets } from '@/hooks/useNFTAssets';
import { useWalletBalance } from '@/hooks/useWalletBalance';
import { simulateSlotSpin, validateBet } from '@/utils/gameUtils';
import { rateLimiter } from '@/utils/rateLimiter';
import { SpinResult } from '@/types';

const SlotMachine: React.FC = () => {
  const { publicKey, connected } = useWallet();
  const { balance } = useWalletBalance();
  const { slotSymbols, loading: nftLoading } = useNFTAssets();
  
  const [betAmount, setBetAmount] = useState<number>(0.1);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [result, setResult] = useState<SpinResult | null>(null);
  const [message, setMessage] = useState<string>('');

  const minBet = 0.01;
  const maxBet = 10;
  const reels = 5;
  const rows = 3;

  const handleSpin = async () => {
    if (!connected || !publicKey) {
      setMessage('Please connect your wallet first');
      return;
    }

    if (nftLoading || slotSymbols.length === 0) {
      setMessage('Loading game assets...');
      return;
    }

    if (!validateBet(betAmount, balance, minBet, maxBet)) {
      setMessage('Invalid bet amount');
      return;
    }

    // Check rate limit
    if (!rateLimiter.checkLimit(publicKey.toString())) {
      const timeLeft = Math.ceil(rateLimiter.getTimeUntilReset(publicKey.toString()) / 1000);
      setMessage(`Rate limit exceeded. Try again in ${timeLeft} seconds`);
      return;
    }

    setSpinning(true);
    setMessage('');

    // Simulate spinning animation
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get spin result
    const spinResult = simulateSlotSpin(slotSymbols, reels, rows);
    setResult(spinResult);

    if (spinResult.winAmount > 0) {
      const totalWin = betAmount * spinResult.winAmount;
      setMessage(`🎉 You won ${totalWin.toFixed(4)} SOL! (${spinResult.multiplier}x)`);
    } else {
      setMessage('Try again!');
    }

    setSpinning(false);
  };

  const renderReel = (reelIndex: number) => {
    if (!result) {
      return (
        <div className="flex flex-col gap-2">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="w-20 h-20 bg-grudge-darker rounded-lg border border-gray-700 flex items-center justify-center">
              <span className="text-3xl">?</span>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-2">
        {result.reels[reelIndex].map((symbolIndex, rowIndex) => {
          const symbol = slotSymbols[symbolIndex];
          return (
            <div 
              key={rowIndex} 
              className={`w-20 h-20 bg-grudge-darker rounded-lg border-2 ${
                spinning ? 'animate-bounce border-grudge-primary' : 'border-gray-700'
              } flex items-center justify-center overflow-hidden`}
            >
              {symbol.image.endsWith('.svg') ? (
                <div className="text-4xl">{getSymbolEmoji(symbol.id)}</div>
              ) : (
                <div className="text-4xl">{getSymbolEmoji(symbol.id)}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const getSymbolEmoji = (symbolId: string): string => {
    const emojiMap: { [key: string]: string } = {
      '1': '💎',
      '2': '💍',
      '3': '💚',
      '4': '💙',
      '5': '🪙',
      '6': '7️⃣',
      '7': '🍒',
    };
    return emojiMap[symbolId] || '⭐';
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="card">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-grudge-gold to-grudge-primary bg-clip-text text-transparent">
          NFT Slot Machine
        </h2>

        {/* Slot Reels */}
        <div className="flex justify-center gap-4 mb-8 p-6 bg-gradient-to-b from-grudge-darker to-grudge-dark rounded-xl border-2 border-grudge-primary neon-glow">
          {Array.from({ length: reels }).map((_, index) => (
            <div key={index}>{renderReel(index)}</div>
          ))}
        </div>

        {/* Bet Controls */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <label className="text-grudge-text font-semibold">Bet Amount (SOL):</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBetAmount(Math.max(minBet, betAmount - 0.1))}
                disabled={spinning}
                className="btn-secondary px-4 py-2 disabled:opacity-50"
              >
                -
              </button>
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(parseFloat(e.target.value) || 0)}
                min={minBet}
                max={maxBet}
                step={0.01}
                disabled={spinning}
                className="input-field w-32 text-center"
              />
              <button
                onClick={() => setBetAmount(Math.min(maxBet, betAmount + 0.1))}
                disabled={spinning}
                className="btn-secondary px-4 py-2 disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            <span>Min: {minBet} SOL</span>
            <span>Max: {maxBet} SOL</span>
          </div>
        </div>

        {/* Spin Button */}
        <button
          onClick={handleSpin}
          disabled={spinning || !connected || nftLoading}
          className="btn-primary w-full py-4 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {spinning ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Spinning...
            </span>
          ) : (
            'SPIN'
          )}
        </button>

        {/* Message Display */}
        {message && (
          <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${
            message.includes('won') ? 'bg-green-900/50 text-green-400' : 'bg-grudge-dark text-grudge-text'
          }`}>
            {message}
          </div>
        )}

        {/* Game Info */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="card bg-grudge-darker">
            <div className="text-sm text-gray-400">Paylines</div>
            <div className="text-xl font-bold text-grudge-primary">{rows}</div>
          </div>
          <div className="card bg-grudge-darker">
            <div className="text-sm text-gray-400">Reels</div>
            <div className="text-xl font-bold text-grudge-primary">{reels}</div>
          </div>
          <div className="card bg-grudge-darker">
            <div className="text-sm text-gray-400">Max Win</div>
            <div className="text-xl font-bold text-grudge-gold">50x</div>
          </div>
          <div className="card bg-grudge-darker">
            <div className="text-sm text-gray-400">RTP</div>
            <div className="text-xl font-bold text-grudge-accent">96%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
