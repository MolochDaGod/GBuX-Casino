'use client';

import React from 'react';
import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import WalletButton from './WalletButton';
import BalanceDisplay from './BalanceDisplay';
import CasinoLogo from '../branding/CasinoLogo';

const Header: React.FC = () => {
  const { connected } = useWallet();

  return (
    <header className="bg-grudge-dark border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <CasinoLogo showGrudge={false} className="scale-75 origin-left" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/games" className="text-grudge-text hover:text-grudge-primary transition-colors">
              Games
            </Link>
            <Link href="/collection" className="text-grudge-text hover:text-grudge-primary transition-colors">
              NFT Collection
            </Link>
            <Link href="/leaderboard" className="text-grudge-text hover:text-grudge-primary transition-colors">
              Leaderboard
            </Link>
            {connected && (
              <Link href="/profile" className="text-grudge-text hover:text-grudge-primary transition-colors">
                Profile
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-4">
            {connected && <BalanceDisplay />}
            <WalletButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
