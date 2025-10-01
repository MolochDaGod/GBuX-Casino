# Contributing to GBuX Casino

Thank you for your interest in contributing to the GBuX Casino project! This document provides guidelines for contributing.

## 🎯 Project Vision

GBuX Casino is a Web3-enabled casino platform featuring:
- Grudge Studio branding and aesthetic
- NFT integration with The Growerz collection
- Solana blockchain connectivity
- Clean, accessible gaming experience

## 🛠️ Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MolochDaGod/GBuX-Casino.git
   cd GBuX-Casino
   ```

2. **Start a local server**
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

No build process or dependencies required!

## 📁 Project Structure

```
GBuX-Casino/
├── index.html              # Main HTML structure
├── public/
│   ├── css/
│   │   └── styles.css     # All styling (Grudge Studio branding)
│   ├── js/
│   │   ├── main.js        # Application initialization
│   │   ├── wallet.js      # Solana wallet integration
│   │   ├── nft.js         # NFT management
│   │   └── slots.js       # Slot machine game logic
│   └── assets/            # Static assets (future use)
├── netlify.toml           # Netlify config
├── vercel.json            # Vercel config
├── README.md              # Documentation
├── DEPLOYMENT.md          # Deployment guide
└── CONTRIBUTING.md        # This file
```

## 🎨 Design Guidelines

### Branding

Follow Grudge Studio branding:
- **Primary Color**: Gold (#FFD700)
- **Background**: Black (#0A0A0A, #1A1A1A)
- **Accent**: Red (#FF0000) for primary actions
- **Typography**: Bold, uppercase headers with letter-spacing

### Code Style

- **Indentation**: 4 spaces
- **Naming**: camelCase for JavaScript, kebab-case for CSS
- **Comments**: Use JSDoc style for functions
- **Semicolons**: Always use semicolons in JavaScript

Example:
```javascript
/**
 * Spin the slot machine reels
 * @returns {Promise<void>}
 */
async function spin() {
    // Implementation
}
```

## 🔧 Adding Features

### New Game Modes

To add a new game:

1. Create a new JS file in `public/js/`
2. Follow the same pattern as `slots.js`
3. Export a class with initialization
4. Add to `index.html` and initialize in `main.js`

### New NFT Collections

To add more NFT collections:

1. Edit `public/js/nft.js`
2. Add images to the `nftImages` array
3. Update the gallery section in `index.html`

### Wallet Features

To enhance wallet integration:

1. Edit `public/js/wallet.js`
2. Follow Phantom wallet documentation
3. Test with Solana devnet first

## ✅ Testing

Before submitting a PR:

1. **Visual Testing**
   - Test on Chrome, Firefox, Safari
   - Test on mobile (375px width)
   - Test on tablet (768px width)
   - Test on desktop (1920px width)

2. **Functional Testing**
   - Slot machine spins correctly
   - Payouts calculate accurately
   - Wallet connect/disconnect works
   - NFT gallery loads
   - All links work

3. **Console Check**
   - No JavaScript errors
   - No console warnings
   - No 404 errors for resources

## 🐛 Reporting Bugs

When reporting bugs, include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Exact steps to trigger the bug
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, device
6. **Screenshots**: If applicable

Example:
```markdown
**Bug**: Spin button doesn't work on mobile

**Steps**:
1. Open on iPhone Safari
2. Click SPIN button
3. Nothing happens

**Expected**: Reels should spin
**Actual**: Button click has no effect
**Environment**: iPhone 12, iOS 15, Safari
```

## 💡 Feature Requests

Feature requests are welcome! Please include:

1. **Use Case**: Why is this feature needed?
2. **Description**: What should it do?
3. **Mockups**: Any design ideas (optional)
4. **Priority**: How important is this?

## 🔀 Pull Request Process

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Make changes** following the guidelines above
4. **Test thoroughly** on multiple browsers/devices
5. **Commit** with clear messages: `git commit -m "Add: new payout table"`
6. **Push**: `git push origin feature/your-feature-name`
7. **Open a PR** with a clear description

### PR Description Template

```markdown
## What does this PR do?
Brief description of changes

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on mobile
- [ ] No console errors

## Screenshots
(if applicable)
```

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add: new roulette game feature`
- `Fix: wallet connection on mobile Safari`
- `Update: increase default bet to 15 GBuX`
- `Docs: add deployment instructions`
- `Style: improve button hover effects`
- `Refactor: simplify slot machine logic`

## 🚫 What Not to Do

- Don't add build tools or frameworks (keep it simple)
- Don't change the Grudge Studio branding colors
- Don't add dependencies without discussion
- Don't commit sensitive information
- Don't break existing functionality

## 🎖️ Recognition

Contributors will be recognized in:
- The README.md file
- Release notes
- Special mentions in the project

## 📞 Questions?

- Open an issue for questions
- Discussion board for general questions
- Contact Grudge Studio: https://www.grudgestudio.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

**Thank you for contributing to GBuX Casino!** 🎰
