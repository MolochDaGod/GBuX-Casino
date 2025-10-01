import { NFTAsset, SlotSymbol, SpinResult } from '@/types';

// Calculate payout multiplier based on NFT rarity
export function calculatePayoutFromRarity(rarity: number): number {
  if (rarity >= 90) return 50; // Legendary
  if (rarity >= 70) return 25; // Epic
  if (rarity >= 50) return 10; // Rare
  if (rarity >= 30) return 5; // Uncommon
  return 2; // Common
}

// Generate slot symbols from NFTs
export function generateSlotSymbols(nfts: NFTAsset[]): SlotSymbol[] {
  return nfts.map(nft => ({
    id: nft.mint,
    image: nft.image,
    rarity: nft.rarity,
    payoutMultiplier: calculatePayoutFromRarity(nft.rarity),
  }));
}

// Simulate slot spin (provably fair logic would go here)
export function simulateSlotSpin(symbols: SlotSymbol[], reels: number = 5, rows: number = 3): SpinResult {
  const result: number[][] = [];
  const winningLines: number[][] = [];
  let winAmount = 0;
  let maxMultiplier = 1;

  // Generate random results
  for (let i = 0; i < reels; i++) {
    const reel: number[] = [];
    for (let j = 0; j < rows; j++) {
      reel.push(Math.floor(Math.random() * symbols.length));
    }
    result.push(reel);
  }

  // Check for winning combinations (simplified)
  // Check horizontal lines
  for (let row = 0; row < rows; row++) {
    const symbol = result[0][row];
    let match = true;
    for (let col = 1; col < reels; col++) {
      if (result[col][row] !== symbol) {
        match = false;
        break;
      }
    }
    if (match) {
      winningLines.push([row]);
      const multiplier = symbols[symbol].payoutMultiplier;
      maxMultiplier = Math.max(maxMultiplier, multiplier);
      winAmount += multiplier;
    }
  }

  return {
    reels: result,
    winAmount,
    winningLines,
    multiplier: maxMultiplier,
  };
}

// Validate bet amount
export function validateBet(amount: number, balance: number, minBet: number, maxBet: number): boolean {
  if (amount <= 0) return false;
  if (amount < minBet) return false;
  if (amount > maxBet) return false;
  if (amount > balance) return false;
  return true;
}

// Format SOL amount
export function formatSOL(lamports: number): string {
  return (lamports / 1e9).toFixed(4);
}

// Format number with commas
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Calculate house edge
export function calculateHouseEdge(totalBets: number, totalPayouts: number): number {
  if (totalBets === 0) return 0;
  return ((totalBets - totalPayouts) / totalBets) * 100;
}

// Generate provably fair seed (simplified)
export function generateSeed(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Shuffle array (Fisher-Yates)
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
