# GBuX Casino - Architecture Overview

## System Architecture

### Frontend Architecture

```
┌─────────────────────────────────────────┐
│         Next.js 14 App Router          │
├─────────────────────────────────────────┤
│  Pages (app/)                           │
│  ├── Home (/)                           │
│  ├── Games (/games/*)                   │
│  ├── Collection (/collection)           │
│  ├── Leaderboard (/leaderboard)         │
│  └── Profile (/profile)                 │
└─────────────────────────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│         Component Layer                 │
├─────────────────────────────────────────┤
│  UI Components                          │
│  ├── Header, Footer                     │
│  ├── WalletButton                       │
│  └── BalanceDisplay                     │
│                                         │
│  Game Components                        │
│  ├── SlotMachine                        │
│  └── (Future games)                     │
│                                         │
│  NFT Components                         │
│  └── Collection Display                 │
└─────────────────────────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│         Hooks & State                   │
├─────────────────────────────────────────┤
│  ├── useWallet                          │
│  ├── useWalletBalance                   │
│  └── useNFTAssets                       │
└─────────────────────────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│         Web3 Layer                      │
├─────────────────────────────────────────┤
│  Solana Web3.js                         │
│  ├── Connection                         │
│  ├── Wallet Adapters                    │
│  └── Transaction Handling               │
└─────────────────────────────────────────┘
                  ▼
┌─────────────────────────────────────────┐
│         Solana Blockchain               │
└─────────────────────────────────────────┘
```

## Core Components

### 1. Wallet Integration

**WalletContextProvider** (`lib/WalletContextProvider.tsx`)
- Manages wallet connections
- Provides Web3 context to all components
- Supports multiple wallet providers (Phantom, etc.)

**useWalletBalance** (`hooks/useWalletBalance.ts`)
- Fetches and monitors SOL balance
- Auto-updates on balance changes
- Handles loading states

### 2. NFT System

**useNFTAssets** (`hooks/useNFTAssets.ts`)
- Fetches user's NFT collection
- Generates slot symbols from NFTs
- Maps rarity to payout multipliers

**NFT Integration Flow:**
```
User Wallet → Fetch NFTs → Parse Metadata → Generate Symbols → Use in Games
```

### 3. Game Logic

**SlotMachine** (`components/games/SlotMachine.tsx`)
- Main game component
- Handles betting and spinning
- Displays results and payouts

**Game Utilities** (`utils/gameUtils.ts`)
- `simulateSlotSpin()`: Generates game results
- `validateBet()`: Validates bet amounts
- `calculatePayoutFromRarity()`: Rarity-based payouts

### 4. Security Features

**Rate Limiter** (`utils/rateLimiter.ts`)
- Prevents spam/abuse
- Configurable limits per user
- Time-window based restrictions

**Bet Validation**
- Minimum/maximum bet checks
- Balance verification
- Input sanitization

## Data Flow

### Spin Transaction Flow

```
1. User clicks SPIN
   ↓
2. Validate bet amount and balance
   ↓
3. Check rate limits
   ↓
4. Simulate spin (generate results)
   ↓
5. Calculate winnings
   ↓
6. Update UI with results
   ↓
7. (Future) Execute blockchain transaction
```

## State Management

### Component-Level State
- Game states (spinning, result)
- UI states (loading, errors)
- Form inputs (bet amount)

### Context State
- Wallet connection
- User balance
- NFT assets

### Future: Global State
- User profile data
- Transaction history
- Leaderboard cache

## Styling System

### Tailwind Configuration
- Custom Grudge Studio color palette
- Responsive design utilities
- Animation classes

### Component Patterns
- Card components for content blocks
- Button variants (primary, secondary)
- Input field styles
- Neon glow effects

## Performance Optimizations

### Current
- React 18 features (Suspense, Concurrent Rendering)
- Next.js automatic code splitting
- Image optimization

### Future Improvements
- NFT image caching
- Transaction result caching
- WebSocket for real-time updates
- Service worker for offline support

## Security Considerations

### Client-Side
- Input validation
- Rate limiting
- XSS prevention
- CSRF protection

### Blockchain
- Transaction signing verification
- Balance checks before operations
- Smart contract audits (if implemented)

## Scalability

### Horizontal Scaling
- Stateless architecture
- CDN for static assets
- Multiple RPC endpoints

### Vertical Scaling
- Database for user data (future)
- Redis for caching (future)
- Message queue for async operations (future)

## Future Enhancements

### Phase 2
- Additional games (Blackjack, Poker, Roulette, Dice)
- Smart contract integration for provably fair gaming
- Real blockchain transactions
- NFT marketplace integration

### Phase 3
- Multiplayer games
- Live tournaments
- Social features (chat, friends)
- Mobile app (React Native)

### Phase 4
- DAO governance
- Token staking
- Affiliate program
- White-label solution
