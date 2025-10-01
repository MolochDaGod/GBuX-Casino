import type { Metadata } from 'next';
import '@/styles/globals.css';
import WalletContextProvider from '@/lib/WalletContextProvider';
import Header from '@/components/ui/Header';

export const metadata: Metadata = {
  title: 'GBuX Casino - Grudge Studio Production',
  description: 'Web3 Casino with NFT Integration powered by Solana',
  keywords: ['casino', 'web3', 'solana', 'nft', 'gambling', 'grudge studio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <WalletContextProvider>
          <div className="min-h-screen bg-grudge-darker">
            <Header />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="bg-grudge-dark border-t border-gray-800 mt-16">
              <div className="container mx-auto px-4 py-8">
                <div className="text-center text-gray-400 text-sm">
                  <p className="mb-2">
                    <span className="text-grudge-primary font-semibold">GBuX Casino</span> - A Grudge Studio Production
                  </p>
                  <p>Play responsibly. Must be 18+ to play.</p>
                  <p className="mt-4 text-xs">
                    Powered by Solana • Built with Next.js & Tailwind CSS
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </WalletContextProvider>
      </body>
    </html>
  );
}
