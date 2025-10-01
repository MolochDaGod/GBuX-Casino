'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletButton: React.FC = () => {
  return (
    <WalletMultiButton className="!bg-gradient-to-r !from-grudge-primary !to-grudge-secondary hover:!opacity-90 !transition-opacity !rounded-lg !font-semibold !shadow-lg" />
  );
};

export default WalletButton;
