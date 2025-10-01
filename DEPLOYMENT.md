# 🚀 Deployment Guide

## GitHub Pages Setup

### 1. Enable GitHub Pages

1. Go to your repository settings: https://github.com/MolochDaGod/GBuX-Casino/settings/pages
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. Save the changes

### 2. Automatic Deployment

The casino will automatically deploy when you:
- Push to the `main` branch
- Push to any `copilot/**` branch
- Manually trigger the workflow from the Actions tab

### 3. Access Your Casino

After deployment (usually takes 1-2 minutes), access your casino at:
```
https://molochdagod.github.io/GBuX-Casino/
```

## Local Development

### Prerequisites
- Node.js v14 or higher
- Phantom Wallet browser extension (for testing Web3 features)

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:8080 in your browser.

### Testing Wallet Connection

1. Install [Phantom Wallet](https://phantom.app/)
2. Create or import a wallet
3. Switch to Solana Devnet for testing:
   - Open Phantom
   - Go to Settings > Developer Settings
   - Enable "Testnet Mode"
4. Get free SOL from [Solana Faucet](https://faucet.solana.com/)

## Configuration

### Network Selection

Edit `app.js` line 8:
```javascript
const SOLANA_NETWORK = 'mainnet-beta'; // or 'devnet' for testing
```

### GBUX Token Address

The GBUX token address is configured in `app.js`:
```javascript
const GBUX_TOKEN_ADDRESS = '55TpSoMNxbfsNJ9U1dQoo9H3dRtDmjBZVMcKqvU2nray';
```

## Customization

### Branding
- Edit colors in `styles.css`
- Update logo text in `index.html`
- Add custom images to `assets/` directory

### Game Rules
Modify multipliers in `app.js` function `calculateWin()`:
```javascript
if (results[0] === '🔥') return 100; // Jackpot multiplier
if (results[0] === '⭐') return 50;
// etc...
```

### Symbols
Change slot symbols in `app.js`:
```javascript
const SYMBOLS = ['🌿', '💎', '🍀', '🔥', '⭐', '🎯'];
```

## Troubleshooting

### Wallet Not Connecting
- Ensure Phantom Wallet is installed
- Check that you're on the correct network (mainnet/devnet)
- Try refreshing the page and reconnecting

### Deployment Not Working
- Check the Actions tab for error messages
- Ensure GitHub Pages is enabled in repository settings
- Verify the workflow file is in `.github/workflows/deploy.yml`

### Solana Web3.js Not Loading
- Check browser console for errors
- Verify CDN is accessible (might be blocked by ad blockers)
- Try disabling ad blockers or use a different browser

## Security Notes

⚠️ **Important**: This is a demo application. For production use:
- Implement proper on-chain program for game logic
- Add server-side validation
- Implement proper randomness (VRF)
- Add rate limiting and anti-cheating measures
- Conduct security audits

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Contact the development team

---

**Happy Gaming! 🎰🌿**
