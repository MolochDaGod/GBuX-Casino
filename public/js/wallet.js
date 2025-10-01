/**
 * Wallet Integration for Solana Web3
 * Handles wallet connection and balance management
 */

class WalletManager {
    constructor() {
        this.connected = false;
        this.publicKey = null;
        this.balance = 0;
        this.provider = null;
    }

    /**
     * Initialize wallet connection
     */
    async connect() {
        try {
            // Check if Phantom wallet is installed
            if (window.solana && window.solana.isPhantom) {
                console.log('Phantom wallet detected');
                this.provider = window.solana;
                
                // Connect to wallet
                const resp = await this.provider.connect();
                this.publicKey = resp.publicKey.toString();
                this.connected = true;
                
                // Get balance
                await this.updateBalance();
                
                // Update UI
                this.updateUI();
                
                console.log('Connected to wallet:', this.publicKey);
                return true;
            } else {
                // If no wallet detected, show message
                alert('Please install Phantom wallet to continue.\nVisit: https://phantom.app/');
                window.open('https://phantom.app/', '_blank');
                return false;
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
            alert('Failed to connect wallet. Please try again.');
            return false;
        }
    }

    /**
     * Disconnect wallet
     */
    async disconnect() {
        try {
            if (this.provider) {
                await this.provider.disconnect();
            }
            this.connected = false;
            this.publicKey = null;
            this.balance = 0;
            this.updateUI();
            console.log('Wallet disconnected');
        } catch (error) {
            console.error('Error disconnecting wallet:', error);
        }
    }

    /**
     * Update wallet balance
     */
    async updateBalance() {
        try {
            if (this.provider && this.connected) {
                // For demo purposes, we'll use a mock balance
                // In production, you would fetch the actual SOL balance
                this.balance = Math.random() * 10 + 1; // Random balance between 1-11 SOL
                console.log('Balance updated:', this.balance);
            }
        } catch (error) {
            console.error('Error updating balance:', error);
        }
    }

    /**
     * Update UI elements
     */
    updateUI() {
        const connectBtn = document.getElementById('connect-wallet');
        const walletInfo = document.getElementById('wallet-info');
        const walletAddress = document.getElementById('wallet-address');
        const walletBalance = document.getElementById('wallet-balance');

        if (this.connected) {
            connectBtn.textContent = 'Disconnect';
            connectBtn.onclick = () => this.disconnect();
            
            // Show wallet info
            walletInfo.classList.remove('hidden');
            
            // Format address (show first 4 and last 4 characters)
            const shortAddress = `${this.publicKey.slice(0, 4)}...${this.publicKey.slice(-4)}`;
            walletAddress.textContent = shortAddress;
            
            // Show balance
            walletBalance.textContent = `${this.balance.toFixed(4)} SOL`;
        } else {
            connectBtn.textContent = 'Connect Wallet';
            connectBtn.onclick = () => this.connect();
            
            // Hide wallet info
            walletInfo.classList.add('hidden');
        }
    }

    /**
     * Check if wallet is connected
     */
    isConnected() {
        return this.connected;
    }

    /**
     * Get public key
     */
    getPublicKey() {
        return this.publicKey;
    }

    /**
     * Get balance
     */
    getBalance() {
        return this.balance;
    }
}

// Export wallet manager instance
const walletManager = new WalletManager();
