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
=======
**A Grudge Studio Production**

Web3 Casino platform featuring NFT-integrated gaming with The Growerz collection on Solana blockchain.

![Grudge Studio](https://img.shields.io/badge/Grudge-Studio-gold?style=for-the-badge)
![Solana](https://img.shields.io/badge/Solana-Web3-9945FF?style=for-the-badge&logo=solana)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🎮 Features

- **NFT-Integrated Slot Machine**: Play with imagery from The Growerz NFT collection
- **Solana Web3 Integration**: Connect your Phantom wallet for true Web3 experience
- **Grudge Studio Branding**: Full branding implementation with dark, bold aesthetics
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Ready-to-Deploy**: Simple HTML/CSS/JS architecture, no build process required

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/MolochDaGod/GBuX-Casino.git
cd GBuX-Casino
```

2. Open `index.html` in your browser:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Or simply open index.html in your browser
```

3. Visit `http://localhost:8000` in your browser

### Install Phantom Wallet (Optional)

For full Web3 functionality, install the Phantom wallet:
- Visit: https://phantom.app/
- Download the browser extension
- Create or import a wallet

## 🎯 How to Play

1. **Set Your Bet**: Adjust bet amount (1-100 GBuX)
2. **Spin the Reels**: Click "SPIN" button or press SPACE
3. **Win Big**: Match symbols for payouts!

### Payout Table

| Combination | Payout |
|------------|--------|
| 🌿 🌿 🌿 | 100x |
| 💎 💎 💎 | 50x |
| 🎰 🎰 🎰 | 25x |
| NFT NFT NFT | 75x |
| Any 2 Match | 2x |

## 📦 Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select branch: `main`
4. Select folder: `/ (root)`
5. Click Save
6. Your site will be available at: `https://[username].github.io/GBuX-Casino/`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty)
3. Set publish directory: `/`
4. Deploy!

### Vercel

1. Import your GitHub repository to Vercel
2. Framework preset: Other
3. Build command: (leave empty)
4. Output directory: (leave empty)
5. Deploy!

### Traditional Hosting

Simply upload all files to your web host via FTP/SFTP. No server-side processing required.

## 🏗️ Project Structure

```
GBuX-Casino/
├── index.html              # Main HTML file
├── public/
│   ├── css/
│   │   └── styles.css     # All styles and branding
│   ├── js/
│   │   ├── main.js        # Application entry point
│   │   ├── wallet.js      # Solana wallet integration
│   │   ├── nft.js         # NFT loading and management
│   │   └── slots.js       # Slot machine game logic
│   └── assets/            # Static assets (if needed)
└── README.md              # This file
```

## 🎨 Branding

The platform features full Grudge Studio branding:
- **Colors**: Dark theme with gold accents (#FFD700)
- **Typography**: Bold, uppercase headers with letter-spacing
- **Style**: Modern, neon-inspired casino aesthetic
- **Reference**: https://www.grudgestudio.com/branding

## 🔗 NFT Collection

**The Growerz Collection**
- Magic Eden Marketplace: https://magiceden.us/marketplace/the_growerz
- Featured NFT Images:
  - https://i.imgur.com/dBCF7mR.png
  - https://i.imgur.com/bGd5QJ0.png
  - https://i.imgur.com/8pNNJlv.png

## ⌨️ Keyboard Shortcuts

- **SPACE**: Spin the reels
- **CTRL+R**: Reset game (with confirmation)

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **Vanilla JavaScript**: No frameworks, pure JS
- **Solana Web3.js**: Blockchain integration
- **Phantom Wallet**: Web3 wallet connectivity

## 📱 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## 🔐 Security Notes

- This is a demonstration platform for educational purposes
- No real cryptocurrency transactions occur
- Wallet connection is optional and used for demonstration only
- Play responsibly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🎬 Credits

**Developed by**: Grudge Studio
**Website**: https://www.grudgestudio.com
**NFT Collection**: The Growerz on Magic Eden

---

**Play responsibly. This is a demonstration platform.**

© 2024 Grudge Studio. All rights reserved.

