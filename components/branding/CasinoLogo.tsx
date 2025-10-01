'use client';

import React from 'react';
import GrudgeLogo from './GrudgeLogo';

interface CasinoLogoProps {
  showGrudge?: boolean;
  className?: string;
}

const CasinoLogo: React.FC<CasinoLogoProps> = ({ showGrudge = true, className = '' }) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {showGrudge && <GrudgeLogo size="sm" />}
      <div className="text-4xl md:text-6xl font-bold">
        <span className="text-glow bg-gradient-to-r from-grudge-gold via-grudge-primary to-grudge-secondary bg-clip-text text-transparent">
          GBuX
        </span>
        <span className="text-grudge-text ml-2">CASINO</span>
      </div>
      <div className="text-sm text-gray-400">Web3 Gaming • NFT Powered</div>
    </div>
  );
};

export default CasinoLogo;
