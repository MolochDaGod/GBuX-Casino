# 🌿 GBuX Casino - THC SPIN 🌿

A Solana-based casino game featuring the THC SPIN slot machine. Play with GBUX tokens and SOL!

## 🎰 Features

- **Web3 Wallet Integration**: Connect with Phantom wallet
- **GBUX Token Support**: Play with GBUX tokens (55TpSoMNxbfsNJ9U1dQoo9H3dRtDmjBZVMcKqvU2nray)
- **SOL Support**: Also play with native Solana tokens
- **THC SPIN Slot Game**: Cannabis-themed slot machine with exciting multipliers
- **Real-time Balance Display**: See your SOL and GBUX balances
- **Progressive Stats Tracking**: Track your spins, wins, and biggest jackpot
- **Responsive Design**: Works on desktop and mobile devices

## 🎮 How to Play

1. **Connect Wallet**: Click "Connect Wallet" and approve the connection in your Phantom wallet
2. **Set Bet Amount**: Choose how much you want to bet (minimum 0.01)
3. **Select Token**: Choose between SOL or GBUX
4. **Spin**: Click the "SPIN" button and watch the reels!
5. **Win Big**: Match symbols for multipliers:
   - 🌿🌿🌿 = 5x
   - 🍀🍀🍀 = 10x
   - 💎💎💎 = 20x
   - ⭐⭐⭐ = 50x
   - 🔥🔥🔥 = 100x JACKPOT!
   - Any 2 matching = 2x

## 🚀 Live Demo

Visit the live casino at: https://molochdagod.github.io/GBuX-Casino/

## 🛠️ Development

### Prerequisites

- Node.js (v14 or higher)
- Phantom Wallet browser extension
- Git

### Local Setup

```bash
# Clone the repository
git clone https://github.com/MolochDaGod/GBuX-Casino.git
cd GBuX-Casino

# Install dependencies
npm install

# Run local development server
npm run dev
```

Then open http://localhost:8080 in your browser.

### Project Structure

```
GBuX-Casino/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── app.js              # JavaScript with Web3 integration
├── package.json        # Node.js dependencies
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

## 🔧 Configuration

### GBUX Token Address
```
55TpSoMNxbfsNJ9U1dQoo9H3dRtDmjBZVMcKqvU2nray
```

### Network
The app connects to Solana mainnet-beta by default. To use devnet for testing, modify `SOLANA_NETWORK` in `app.js`.

## 📦 Deployment

The casino automatically deploys to GitHub Pages when you push to the main branch or any copilot/** branch.

### Manual Deployment

```bash
npm run deploy
```

## 🎨 Branding

Branding inspired by [Grudge Studio](https://www.grudgestudio.com/branding) with a cannabis/THC theme featuring:
- Green and purple color scheme
- Cannabis leaf motifs
- Retro slot machine aesthetic
- Neon glow effects

## ⚠️ Disclaimer

This is a demonstration casino game. Please play responsibly. Gambling involves risk, and you should never bet more than you can afford to lose.

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ using Solana Web3.js and vanilla JavaScript**
