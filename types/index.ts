import { PublicKey } from '@solana/web3.js';

// NFT Types
export interface NFTAttribute {
  trait_type: string;
  value: string | number;
}

export interface NFTAsset {
  mint: string;
  name: string;
  image: string;
  attributes: NFTAttribute[];
  rarity: number;
}

export interface SlotSymbol {
  id: string;
  image: string;
  rarity: number;
  payoutMultiplier: number;
}

// Game Types
export enum GameType {
  SLOTS = 'slots',
  BLACKJACK = 'blackjack',
  POKER = 'poker',
  ROULETTE = 'roulette',
  DICE = 'dice',
}

export interface Game {
  type: GameType;
  nftIntegration: boolean;
  minBet: number;
  maxBet: number;
  houseEdge: number;
}

export interface GameResult {
  win: boolean;
  payout: number;
  multiplier: number;
  symbols?: SlotSymbol[];
}

// Slot Machine Types
export interface SlotMachine {
  reels: NFTAsset[][];
  paylines: number;
  betAmount: number;
  maxBet: number;
  nftCollection?: string;
}

export interface SpinResult {
  reels: number[][];
  winAmount: number;
  winningLines: number[][];
  multiplier: number;
}

// User Types
export interface UserProfile {
  walletAddress: string;
  balance: number;
  totalWagered: number;
  totalWon: number;
  gamesPlayed: number;
  favoriteGame?: GameType;
}

export interface Transaction {
  id: string;
  type: 'bet' | 'win' | 'deposit' | 'withdraw';
  amount: number;
  game: GameType;
  timestamp: number;
  signature?: string;
}

// Leaderboard Types
export interface LeaderboardEntry {
  rank: number;
  walletAddress: string;
  displayName?: string;
  avatar?: string;
  totalWon: number;
  gamesWon: number;
}

// Rate Limiting
export interface RateLimiter {
  maxBets: number;
  timeWindow: number;
  attempts: number;
  resetTime: number;
}

// Web3 Types
export interface WalletContextState {
  connected: boolean;
  publicKey: PublicKey | null;
  balance: number;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}
