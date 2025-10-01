'use client';

import { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export function useWalletBalance() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!publicKey) {
      setBalance(0);
      return;
    }

    setLoading(true);
    connection
      .getBalance(publicKey)
      .then((bal) => {
        setBalance(bal / LAMPORTS_PER_SOL);
      })
      .catch((error) => {
        console.error('Error fetching balance:', error);
        setBalance(0);
      })
      .finally(() => {
        setLoading(false);
      });

    // Subscribe to balance changes
    const subscriptionId = connection.onAccountChange(
      publicKey,
      (accountInfo) => {
        setBalance(accountInfo.lamports / LAMPORTS_PER_SOL);
      }
    );

    return () => {
      connection.removeAccountChangeListener(subscriptionId);
    };
  }, [publicKey, connection]);

  return { balance, loading };
}
