/**
 * Slot Machine Game Logic
 * Handles spinning, winning, and game state
 */

class SlotMachine {
    constructor() {
        this.balance = 1000; // Starting balance in GBuX
        this.betAmount = 10;
        this.isSpinning = false;
        this.reels = [null, null, null];
        this.spinDuration = 2000; // 2 seconds
    }

    /**
     * Initialize slot machine
     */
    init() {
        // Get UI elements
        this.spinBtn = document.getElementById('spin-btn');
        this.betInput = document.getElementById('bet-amount');
        this.balanceDisplay = document.getElementById('player-balance');
        this.lastWinDisplay = document.getElementById('last-win');
        this.reel1 = document.getElementById('reel1');
        this.reel2 = document.getElementById('reel2');
        this.reel3 = document.getElementById('reel3');
        this.slotMachine = document.querySelector('.slot-machine');

        // Set up event listeners
        this.spinBtn.addEventListener('click', () => this.spin());
        this.betInput.addEventListener('change', (e) => this.updateBet(e.target.value));

        // Initialize display
        this.updateDisplay();
        this.initializeReels();
    }

    /**
     * Initialize reels with random items
     */
    initializeReels() {
        const reelElements = [this.reel1, this.reel2, this.reel3];
        
        reelElements.forEach((reel, index) => {
            const item = nftManager.getRandomSlotItem();
            this.reels[index] = item;
            this.setReelContent(reel, item);
        });
    }

    /**
     * Set reel content (symbol or image)
     */
    setReelContent(reelElement, item) {
        const symbolDiv = reelElement.querySelector('.symbol');
        
        if (item.type === 'image') {
            symbolDiv.style.backgroundImage = `url('${item.value}')`;
            symbolDiv.textContent = '';
        } else {
            symbolDiv.style.backgroundImage = 'none';
            symbolDiv.textContent = item.value;
        }
    }

    /**
     * Update bet amount
     */
    updateBet(value) {
        const bet = parseInt(value);
        if (bet > 0 && bet <= this.balance) {
            this.betAmount = bet;
        } else {
            this.betInput.value = this.betAmount;
            alert('Invalid bet amount!');
        }
    }

    /**
     * Spin the reels
     */
    async spin() {
        if (this.isSpinning) return;
        
        // Check if player has enough balance
        if (this.balance < this.betAmount) {
            alert('Insufficient balance! Please lower your bet or add more GBuX.');
            return;
        }

        // Deduct bet from balance
        this.balance -= this.betAmount;
        this.isSpinning = true;
        this.spinBtn.disabled = true;
        this.updateDisplay();

        // Add spinning animation
        const reelElements = [this.reel1, this.reel2, this.reel3];
        reelElements.forEach(reel => reel.classList.add('spinning'));

        // Animate spinning with changing symbols (staggered intervals)
        const reelIntervals = [
            setInterval(() => {
                const item = nftManager.getRandomSlotItem();
                this.setReelContent(this.reel1, item);
            }, 100),
            setInterval(() => {
                const item = nftManager.getRandomSlotItem();
                this.setReelContent(this.reel2, item);
            }, 150),
            setInterval(() => {
                const item = nftManager.getRandomSlotItem();
                this.setReelContent(this.reel3, item);
            }, 200)
        ];

        // Wait for spin duration
        await this.sleep(this.spinDuration);

        // Stop spinning
        reelIntervals.forEach(interval => clearInterval(interval));
        reelElements.forEach(reel => reel.classList.remove('spinning'));

        // Generate final results
        this.reels = [
            nftManager.getRandomSlotItem(),
            nftManager.getRandomSlotItem(),
            nftManager.getRandomSlotItem()
        ];

        // Display final results
        reelElements.forEach((reel, index) => {
            this.setReelContent(reel, this.reels[index]);
        });

        // Calculate winnings
        const winAmount = this.calculateWin();
        
        if (winAmount > 0) {
            this.balance += winAmount;
            this.lastWinDisplay.textContent = `${winAmount} GBuX`;
            this.showWinAnimation();
            console.log('WIN!', winAmount, 'GBuX');
        } else {
            this.lastWinDisplay.textContent = '0 GBuX';
            console.log('No win this time');
        }

        // Update display
        this.updateDisplay();
        this.isSpinning = false;
        this.spinBtn.disabled = false;
    }

    /**
     * Calculate win amount based on reel results
     */
    calculateWin() {
        const [reel1, reel2, reel3] = this.reels;
        
        // Check for three matching symbols
        if (reel1.value === reel2.value && reel2.value === reel3.value) {
            // Triple match
            if (reel1.value === '🌿') {
                return this.betAmount * 100; // 100x for triple plant
            } else if (reel1.value === '💎') {
                return this.betAmount * 50; // 50x for triple diamond
            } else if (reel1.value === '🎰') {
                return this.betAmount * 25; // 25x for triple slot
            } else if (reel1.type === 'image') {
                return this.betAmount * 75; // 75x for triple NFT
            } else {
                return this.betAmount * 10; // 10x for other triples
            }
        }
        
        // Check for two matching symbols
        if (reel1.value === reel2.value || reel2.value === reel3.value || reel1.value === reel3.value) {
            return this.betAmount * 2; // 2x for double match
        }
        
        // No win
        return 0;
    }

    /**
     * Show win animation
     */
    showWinAnimation() {
        this.slotMachine.classList.add('win');
        setTimeout(() => {
            this.slotMachine.classList.remove('win');
        }, 1500);
    }

    /**
     * Update display
     */
    updateDisplay() {
        this.balanceDisplay.textContent = `${this.balance} GBuX`;
        this.betInput.max = this.balance;
        
        if (this.balance < this.betAmount) {
            this.betInput.value = this.balance;
            this.betAmount = this.balance;
        }
    }

    /**
     * Helper function to sleep
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Get current balance
     */
    getBalance() {
        return this.balance;
    }

    /**
     * Add balance (for testing or purchases)
     */
    addBalance(amount) {
        this.balance += amount;
        this.updateDisplay();
    }

    /**
     * Reset game
     */
    reset() {
        this.balance = 1000;
        this.betAmount = 10;
        this.betInput.value = this.betAmount;
        this.lastWinDisplay.textContent = '0 GBuX';
        this.updateDisplay();
        this.initializeReels();
    }
}

// Export slot machine instance
const slotMachine = new SlotMachine();
