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
