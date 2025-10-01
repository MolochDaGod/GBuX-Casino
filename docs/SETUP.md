# GBuX Casino - Setup Guide

## Prerequisites

- Node.js 18+ 
- npm or yarn
- A Solana wallet (Phantom recommended)
- Basic knowledge of Web3 and Solana

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GBuX-Casino
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and configure:
   - `NEXT_PUBLIC_SOLANA_NETWORK`: Set to `devnet` for testing or `mainnet-beta` for production
   - `NEXT_PUBLIC_SOLANA_RPC_URL`: Your Solana RPC endpoint (optional)
   - `NEXT_PUBLIC_NFT_COLLECTION_ADDRESS`: Your NFT collection address (optional)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Wallet Setup

### Using Phantom Wallet

1. Install the [Phantom browser extension](https://phantom.app/)
2. Create or import a Solana wallet
3. Switch to Devnet for testing:
   - Open Phantom
   - Settings → Change Network → Devnet
4. Get devnet SOL from a [faucet](https://solfaucet.com/)

## Testing

1. Connect your wallet using the "Connect Wallet" button
2. Navigate to the Slot Machine game
3. Place a bet and spin
4. Check your balance and transaction history

## Development

### Project Structure

```
GBuX-Casino/
├── app/              # Next.js 14 app directory
├── components/       # React components
│   ├── ui/          # UI components
│   ├── games/       # Game components
│   ├── nft/         # NFT components
│   └── branding/    # Grudge Studio branding
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
├── lib/             # Library code (Web3 providers)
└── styles/          # Global styles
```

### Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Solana Web3.js**: Blockchain interaction
- **Wallet Adapter**: Multi-wallet support

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables for Production

- `NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta`
- `NEXT_PUBLIC_SOLANA_RPC_URL=<your-rpc-url>`
- `NEXT_PUBLIC_NFT_COLLECTION_ADDRESS=<your-collection>`

## Troubleshooting

### Common Issues

1. **Wallet not connecting**
   - Ensure Phantom is installed and unlocked
   - Check you're on the correct network (devnet/mainnet)

2. **Insufficient balance**
   - Add SOL to your wallet
   - On devnet, use a faucet

3. **Transaction errors**
   - Check RPC endpoint is accessible
   - Verify network congestion
   - Ensure sufficient SOL for transaction fees

## Support

For issues or questions, please open a GitHub issue or contact the Grudge Studio team.
