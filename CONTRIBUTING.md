# Contributing to GBuX Casino


Thank you for your interest in contributing to GBuX Casino! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## How to Contribute

### Reporting Bugs

1. **Check existing issues** to avoid duplicates
2. **Use the bug report template**
3. **Include**:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser/wallet information
   - Console errors

### Suggesting Features

1. **Check if feature already exists or is planned**
2. **Open a feature request issue**
3. **Describe**:
   - The problem it solves
   - Proposed solution
   - Alternative approaches
   - Additional context

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow code style guidelines
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

5. **Commit with clear messages**
   ```bash
   git commit -m "Add: Brief description of feature"
   ```

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Development Setup

See [docs/SETUP.md](docs/SETUP.md) for detailed setup instructions.

## Code Style

### TypeScript
- Use TypeScript strict mode
- Define interfaces for all data structures
- Avoid `any` types
- Use meaningful variable names

### React/Next.js
- Use functional components
- Implement hooks for state management
- Keep components small and focused
- Use proper prop types

### Styling
- Use Tailwind CSS utilities
- Follow Grudge Studio brand guidelines
- Ensure responsive design
- Test on multiple screen sizes

### Git Commit Messages
- **Add**: New features
- **Fix**: Bug fixes
- **Update**: Changes to existing features
- **Refactor**: Code improvements
- **Docs**: Documentation changes
- **Test**: Test additions/changes

## Testing

- Write tests for new features
- Ensure all tests pass before PR
- Test on devnet before mainnet
- Test with different wallets

## Documentation

- Update README for user-facing changes
- Update docs/ for technical changes
- Add inline comments for complex logic
- Keep API documentation current

## Review Process

1. **Automated checks** run on all PRs
2. **Code review** by maintainers
3. **Testing** on devnet
4. **Approval** and merge

## Areas for Contribution

### High Priority
- Additional game implementations
- Smart contract development
- Performance optimizations
- Mobile optimizations
- Accessibility improvements

### Medium Priority
- UI/UX enhancements
- Documentation improvements
- Test coverage
- Error handling

### Good First Issues
- Documentation fixes
- Small UI tweaks
- Bug fixes
- Code cleanup

## Community

- **Discord**: [Coming Soon]
- **Twitter**: [Coming Soon]
- **GitHub Discussions**: Use for questions and discussions

## License

By contributing, you agree that your contributions will be licensed under the project's ISC License.

## Questions?

Feel free to open an issue with the "question" label or reach out to the maintainers.

---

Thank you for contributing to GBuX Casino! 🎰
=======
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

