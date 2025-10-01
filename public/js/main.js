/**
 * Main Application Entry Point
 * Initializes all components and sets up event listeners
 */

document.addEventListener('DOMContentLoaded', async () => {
    console.log('GBuX Casino - Grudge Studio');
    console.log('Initializing application...');

    try {
        // Initialize NFT Manager
        console.log('Loading NFTs...');
        await nftManager.loadNFTs();
        console.log('NFTs loaded successfully');

        // Initialize Slot Machine
        console.log('Initializing slot machine...');
        slotMachine.init();
        console.log('Slot machine initialized');

        // Set up wallet connection button
        const connectWalletBtn = document.getElementById('connect-wallet');
        connectWalletBtn.addEventListener('click', async () => {
            if (!walletManager.isConnected()) {
                await walletManager.connect();
            } else {
                await walletManager.disconnect();
            }
        });

        // Check for wallet on page load
        if (window.solana && window.solana.isPhantom) {
            console.log('Phantom wallet detected');
            // Auto-connect if previously connected (optional)
            // await walletManager.connect();
        } else {
            console.log('No Solana wallet detected');
        }

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Press Space to spin (if not already spinning)
            if (e.code === 'Space' && !slotMachine.isSpinning) {
                e.preventDefault();
                slotMachine.spin();
            }

            // Press R to reset (for testing)
            if (e.code === 'KeyR' && e.ctrlKey) {
                e.preventDefault();
                if (confirm('Reset game to initial state?')) {
                    slotMachine.reset();
                }
            }
        });

        console.log('Application initialized successfully');
        console.log('Press SPACE to spin, CTRL+R to reset');

    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

// Add window load event for final initialization
window.addEventListener('load', () => {
    console.log('All resources loaded');
    
    // Add a welcome message
    setTimeout(() => {
        console.log('%c🎰 Welcome to GBuX Casino! 🎰', 'font-size: 20px; font-weight: bold; color: #ffd700;');
        console.log('%cA Grudge Studio Production', 'font-size: 14px; color: #b0b0b0;');
        console.log('%cFeaturing The Growerz NFT Collection', 'font-size: 12px; color: #00ff00;');
        console.log('%c\nGame Tips:', 'font-size: 14px; font-weight: bold;');
        console.log('- Triple 🌿 = 100x payout');
        console.log('- Triple 💎 = 50x payout');
        console.log('- Triple 🎰 = 25x payout');
        console.log('- Triple NFT = 75x payout');
        console.log('- Any double match = 2x payout');
        console.log('%c\nKeyboard Shortcuts:', 'font-size: 14px; font-weight: bold;');
        console.log('- SPACE: Spin the reels');
        console.log('- CTRL+R: Reset game');
    }, 500);
});

// Handle visibility change (pause/resume)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Tab hidden - game paused');
    } else {
        console.log('Tab visible - game resumed');
    }
});

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// Export for testing/debugging
window.GBuXCasino = {
    walletManager,
    nftManager,
    slotMachine,
    version: '1.0.0',
    info: () => {
        console.log('GBuX Casino v1.0.0');
        console.log('Balance:', slotMachine.getBalance(), 'GBuX');
        console.log('Wallet:', walletManager.isConnected() ? 'Connected' : 'Disconnected');
        console.log('NFTs loaded:', nftManager.loadedNFTs.length);
    }
};
