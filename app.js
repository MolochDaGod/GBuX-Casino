// GBuX Casino - THC SPIN Game
// Solana Web3 Integration

// Constants
const GBUX_TOKEN_ADDRESS = '55TpSoMNxbfsNJ9U1dQoo9H3dRtDmjBZVMcKqvU2nray';
const SOLANA_NETWORK = 'mainnet-beta'; // Change to 'devnet' for testing
const RPC_ENDPOINT = `https://api.${SOLANA_NETWORK === 'devnet' ? 'devnet' : 'mainnet-beta'}.solana.com`;

// Slot symbols
const SYMBOLS = ['🌿', '💎', '🍀', '🔥', '⭐', '🎯'];

// Game state
let walletConnected = false;
let walletAddress = null;
let connection = null;
let gameStats = {
    totalSpins: 0,
    totalWon: 0,
    biggestWin: 0
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Solana Web3.js to load
    const checkWeb3Loaded = setInterval(() => {
        if (typeof solanaWeb3 !== 'undefined') {
            clearInterval(checkWeb3Loaded);
            initializeGame();
        }
    }, 100);
    
    // Timeout after 10 seconds
    setTimeout(() => {
        clearInterval(checkWeb3Loaded);
        if (typeof solanaWeb3 === 'undefined') {
            console.error('Solana Web3.js failed to load');
            // Initialize anyway with limited functionality
            initializeGame();
        }
    }, 10000);
    
    setupEventListeners();
    loadGameStats();
});

function initializeGame() {
    // Initialize Solana connection
    if (typeof solanaWeb3 !== 'undefined') {
        connection = new solanaWeb3.Connection(RPC_ENDPOINT, 'confirmed');
        console.log('Solana connection initialized');
    } else {
        console.error('Solana Web3.js not loaded');
    }
}

function setupEventListeners() {
    // Connect wallet button
    const connectBtn = document.getElementById('connectWallet');
    connectBtn.addEventListener('click', connectWallet);

    // Spin button
    const spinBtn = document.getElementById('spinButton');
    spinBtn.addEventListener('click', spinSlots);

    // Bet amount input validation
    const betInput = document.getElementById('betAmount');
    betInput.addEventListener('input', (e) => {
        if (e.target.value < 0.01) {
            e.target.value = 0.01;
        }
    });
    
    // Enable demo mode by default
    setTimeout(() => {
        if (!walletConnected) {
            updateWalletUI();
        }
    }, 2000);
}

async function connectWallet() {
    try {
        // Check if Phantom wallet is installed
        const { solana } = window;
        
        if (!solana || !solana.isPhantom) {
            alert('Phantom wallet not found! Please install Phantom wallet extension.');
            window.open('https://phantom.app/', '_blank');
            return;
        }

        // Request connection
        const response = await solana.connect();
        walletAddress = response.publicKey.toString();
        walletConnected = true;

        console.log('Connected to wallet:', walletAddress);

        // Update UI
        updateWalletUI();
        
        // Enable spin button
        document.getElementById('spinButton').disabled = false;

        // Fetch balances
        await updateBalances();

    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please try again.');
    }
}

function updateWalletUI() {
    const connectBtn = document.getElementById('connectWallet');
    const walletInfo = document.getElementById('walletInfo');
    const walletAddressEl = document.getElementById('walletAddress');
    const spinBtn = document.getElementById('spinButton');

    if (walletConnected && walletAddress) {
        // Hide connect button
        connectBtn.style.display = 'none';
        
        // Show wallet info
        walletInfo.style.display = 'block';
        
        // Display shortened address
        const shortAddress = `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`;
        walletAddressEl.textContent = shortAddress;
        
        // Enable spin button
        spinBtn.disabled = false;
    } else {
        // Demo mode - enable spin anyway for testing
        connectBtn.textContent = 'Connect Wallet (Demo Mode Active)';
        spinBtn.disabled = false;
        spinBtn.title = 'Demo mode - no real transactions';
    }
}

async function updateBalances() {
    if (!walletConnected || !connection) return;

    try {
        const publicKey = new solanaWeb3.PublicKey(walletAddress);
        
        // Get SOL balance
        const solBalance = await connection.getBalance(publicKey);
        const solBalanceInSOL = solBalance / solanaWeb3.LAMPORTS_PER_SOL;
        document.getElementById('solBalance').textContent = solBalanceInSOL.toFixed(4);

        // Get GBUX token balance (simplified - would need actual SPL token fetch)
        // For demo purposes, we'll show a placeholder
        document.getElementById('gbuxBalance').textContent = '0.00';
        
        console.log('Balances updated');
    } catch (error) {
        console.error('Error fetching balances:', error);
    }
}

async function spinSlots() {
    const spinBtn = document.getElementById('spinButton');
    const betAmount = parseFloat(document.getElementById('betAmount').value);
    const betToken = document.getElementById('betToken').value;
    
    if (betAmount <= 0) {
        alert('Please enter a valid bet amount!');
        return;
    }

    // Demo mode if wallet not connected
    if (!walletConnected) {
        // Enable demo mode
        console.log('Running in demo mode (wallet not connected)');
    }

    // Disable spin button during spin
    spinBtn.disabled = true;

    // Clear previous result
    document.getElementById('resultMessage').textContent = '';

    // Get reels
    const reels = [
        document.getElementById('reel1'),
        document.getElementById('reel2'),
        document.getElementById('reel3')
    ];

    // Start spinning animation
    reels.forEach(reel => reel.classList.add('spinning'));

    // In a real implementation, this would process the transaction on-chain
    // For demo, we'll simulate it
    await simulateTransaction(betAmount, betToken);

    // Spin for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Stop spinning and show result
    const results = getRandomResults();
    
    reels.forEach((reel, index) => {
        reel.classList.remove('spinning');
        reel.querySelector('.symbol').textContent = results[index];
    });

    // Calculate win
    const winMultiplier = calculateWin(results);
    const winAmount = betAmount * winMultiplier;

    // Update game stats
    gameStats.totalSpins++;
    if (winAmount > 0) {
        gameStats.totalWon += winAmount;
        if (winAmount > gameStats.biggestWin) {
            gameStats.biggestWin = winAmount;
        }
    }
    
    updateGameStats();
    saveGameStats();

    // Show result message
    displayResult(winMultiplier, winAmount, betToken);

    // Update balances
    await updateBalances();

    // Re-enable spin button
    spinBtn.disabled = false;
}

function getRandomResults() {
    // Generate random results with weighted probabilities
    const results = [];
    for (let i = 0; i < 3; i++) {
        const rand = Math.random();
        if (rand < 0.05) {
            results.push('🔥'); // Rare
        } else if (rand < 0.15) {
            results.push('⭐'); // Uncommon
        } else if (rand < 0.30) {
            results.push('💎'); // Common high
        } else if (rand < 0.50) {
            results.push('🍀'); // Common mid
        } else {
            results.push('🌿'); // Most common
        }
    }
    return results;
}

function calculateWin(results) {
    // Check for three of a kind
    if (results[0] === results[1] && results[1] === results[2]) {
        if (results[0] === '🔥') return 100; // Jackpot!
        if (results[0] === '⭐') return 50;
        if (results[0] === '💎') return 20;
        if (results[0] === '🍀') return 10;
        if (results[0] === '🌿') return 5;
    }
    
    // Check for two of a kind
    if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
        return 2;
    }
    
    return 0; // No win
}

function displayResult(multiplier, winAmount, token) {
    const resultEl = document.getElementById('resultMessage');
    
    if (multiplier === 0) {
        resultEl.textContent = 'Try Again! 🎰';
        resultEl.style.color = '#ff6b6b';
    } else if (multiplier === 100) {
        resultEl.textContent = `🔥 JACKPOT! 🔥 Won ${winAmount.toFixed(4)} ${token}!`;
        resultEl.style.color = '#FFD700';
        // Celebrate with confetti effect (simplified)
        celebrateWin();
    } else {
        resultEl.textContent = `🎉 WIN! ${multiplier}x - Won ${winAmount.toFixed(4)} ${token}!`;
        resultEl.style.color = '#4CAF50';
    }
}

function celebrateWin() {
    // Simple celebration effect
    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        reel.style.animation = 'none';
        setTimeout(() => {
            reel.style.animation = 'pulse 0.5s ease-in-out 3';
        }, 10);
    });
}

async function simulateTransaction(amount, token) {
    // In a real implementation, this would:
    // 1. Create and sign a Solana transaction
    // 2. Transfer tokens to the house
    // 3. Wait for confirmation
    // 4. Process the result on-chain
    
    // For demo purposes, we just show loading
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    loadingOverlay.style.display = 'none';
    
    console.log(`Simulated transaction: ${amount} ${token}`);
}

function updateGameStats() {
    document.getElementById('totalSpins').textContent = gameStats.totalSpins;
    document.getElementById('totalWon').textContent = gameStats.totalWon.toFixed(4);
    document.getElementById('biggestWin').textContent = gameStats.biggestWin.toFixed(4);
}

function saveGameStats() {
    // Save stats to localStorage
    localStorage.setItem('thcSpinStats', JSON.stringify(gameStats));
}

function loadGameStats() {
    // Load stats from localStorage
    const saved = localStorage.getItem('thcSpinStats');
    if (saved) {
        gameStats = JSON.parse(saved);
        updateGameStats();
    }
}

// Handle wallet disconnection
window.addEventListener('beforeunload', () => {
    if (walletConnected) {
        saveGameStats();
    }
});

// Listen for Phantom wallet events
if (window.solana) {
    window.solana.on('disconnect', () => {
        walletConnected = false;
        walletAddress = null;
        console.log('Wallet disconnected');
        location.reload(); // Reload page on disconnect
    });
}

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateWin,
        getRandomResults,
        GBUX_TOKEN_ADDRESS
    };
}
