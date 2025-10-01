# GBuX Casino 🎰

> A Grudge Studio Production

**Web3 Casino Platform with NFT Integration powered by Solana**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Solana](https://img.shields.io/badge/Solana-Web3-purple)

## 🌟 Features

- **NFT-Powered Gaming**: Your NFT collection becomes game assets with rarity-based rewards
- **Web3 Integration**: Seamless Solana wallet connection with multiple wallet support
- **Provably Fair**: Transparent and verifiable game outcomes
- **Modern UI/UX**: Grudge Studio branded design with cyberpunk aesthetics
- **Multiple Games**: Slots, Blackjack, Poker, Roulette, and Dice (more coming soon)
- **Real-time Updates**: Live balance tracking and instant payouts
- **Leaderboards**: Compete with other players for top rankings
- **Responsive Design**: Optimized for desktop and mobile devices

## 🎮 Available Games

### ✅ NFT Slot Machine
- 5 reels, 3 rows with NFT-powered symbols
- Rarity-based payouts (2x - 50x multipliers)
- Bet range: 0.01 - 10 SOL
- 96% RTP

### 🚧 Coming Soon
- **Blackjack**: Classic card game with strategy
- **Poker**: Texas Hold'em tournaments and cash games
- **Roulette**: European roulette with multiple bet types
- **Dice**: Fast-paced dice rolling action

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Phantom Wallet (or any Solana wallet)

### Installation

```bash
# Clone the repository
git clone https://github.com/MolochDaGod/GBuX-Casino.git
cd GBuX-Casino

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Setup

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_NFT_COLLECTION_ADDRESS=
```

For testing, use **devnet** and get free SOL from [solfaucet.com](https://solfaucet.com)

## 📁 Project Structure

```
GBuX-Casino/
├── app/                    # Next.js 14 app directory
│   ├── games/             # Game pages
│   ├── collection/        # NFT collection viewer
│   ├── leaderboard/       # Player rankings
│   └── profile/           # User profile
├── components/            # React components
│   ├── ui/               # UI components
│   ├── games/            # Game components
│   ├── nft/              # NFT components
│   └── branding/         # Grudge Studio branding
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
├── types/                # TypeScript definitions
├── lib/                  # Library code
├── styles/               # Global styles
├── public/               # Static assets
└── docs/                 # Documentation
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Solana Web3.js
- **Wallet**: Solana Wallet Adapter
- **UI Components**: Headless UI, Heroicons

## 📚 Documentation

- [Setup Guide](docs/SETUP.md) - Detailed installation and configuration
- [Architecture](docs/ARCHITECTURE.md) - System design and data flow
- [Games Guide](docs/GAMES.md) - Game rules and mechanics

## 🎨 Grudge Studio Branding

This casino is a **Grudge Studio** production featuring:
- Custom color palette with neon accents
- Cyberpunk/gaming hybrid aesthetics
- Professional polish and animations
- Consistent brand identity throughout

### Brand Colors
- Primary: `#8B5CF6` (Purple)
- Secondary: `#EC4899` (Pink)
- Accent: `#10B981` (Neon Green)
- Gold: `#FBBF24`
- Dark: `#0F172A`

## 🔒 Security

- Rate limiting to prevent abuse
- Input validation on all user actions
- Balance verification before transactions
- Secure random number generation
- Regular security audits

## 🎯 Roadmap

### Phase 1 (Current)
- [x] NFT Slot Machine
- [x] Wallet integration
- [x] Basic UI/UX
- [x] Leaderboards
- [x] User profiles

### Phase 2
- [ ] Additional games (Blackjack, Poker)
- [ ] Smart contract integration
- [ ] Provably fair verification
- [ ] Transaction history

### Phase 3
- [ ] Multiplayer features
- [ ] Tournament system
- [ ] Social features
- [ ] Mobile app

### Phase 4
- [ ] DAO governance
- [ ] Token economics
- [ ] Affiliate program
- [ ] Advanced NFT features

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

This project is licensed under the ISC License.

## ⚠️ Disclaimer

**Play Responsibly**
- Must be 18+ to play
- This is a demonstration platform
- Test on devnet before using real SOL
- Gambling can be addictive - play responsibly

## 🔗 Links

- **Website**: [Coming Soon]
- **Discord**: [Coming Soon]
- **Twitter**: [Coming Soon]
- **Grudge Studio**: [grudgestudio.com](https://grudgestudio.com)

## 💬 Support

For questions or issues:
- Open a GitHub issue
- Contact the Grudge Studio team
- Join our Discord community

---

**Built with ❤️ by Grudge Studio**

*Experience the future of Web3 gaming*
