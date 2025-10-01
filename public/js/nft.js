/**
 * NFT Integration
 * Handles NFT loading and display from The Growerz collection
 */

class NFTManager {
    constructor() {
        // Provided NFT images for The Growerz collection
        this.nftImages = [
            'https://i.imgur.com/dBCF7mR.png',
            'https://i.imgur.com/bGd5QJ0.png',
            'https://i.imgur.com/8pNNJlv.png'
        ];
        
        // Additional symbolic representations for slot machine
        this.symbols = [
            '🌿', // Plant/Cannabis theme
            '💎', // Diamond
            '🎰', // Slot machine
            '💰', // Money bag
            '⭐', // Star
            '🔥', // Fire
        ];
        
        this.loadedNFTs = [];
    }

    /**
     * Load NFTs for display
     */
    async loadNFTs() {
        try {
            console.log('Loading NFTs from The Growerz collection...');
            
            // Load the provided NFT images
            const nftGrid = document.getElementById('nft-grid');
            nftGrid.innerHTML = '';
            
            // Create NFT cards for each image
            for (let i = 0; i < this.nftImages.length; i++) {
                const img = this.nftImages[i];
                const nftCard = this.createNFTCard(img, i);
                nftGrid.appendChild(nftCard);
                this.loadedNFTs.push(img);
            }
            
            // Add more cards using the same images (simulate collection)
            for (let i = 0; i < 9; i++) {
                const img = this.nftImages[i % this.nftImages.length];
                const nftCard = this.createNFTCard(img, i + this.nftImages.length);
                nftGrid.appendChild(nftCard);
            }
            
            console.log('NFTs loaded successfully');
        } catch (error) {
            console.error('Error loading NFTs:', error);
            const nftGrid = document.getElementById('nft-grid');
            nftGrid.innerHTML = '<div class="nft-card loading">Failed to load NFTs</div>';
        }
    }

    /**
     * Create NFT card element
     */
    createNFTCard(imageUrl, index) {
        const card = document.createElement('div');
        card.className = 'nft-card';
        card.setAttribute('data-index', index);
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `The Growerz NFT #${index + 1}`;
        img.loading = 'lazy';
        
        // Add error handling for image loading
        img.onerror = () => {
            console.error('Failed to load NFT image:', imageUrl);
            card.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;">NFT</div>';
        };
        
        card.appendChild(img);
        
        // Add click handler
        card.addEventListener('click', () => {
            this.showNFTDetails(imageUrl, index);
        });
        
        return card;
    }

    /**
     * Show NFT details (optional feature)
     */
    showNFTDetails(imageUrl, index) {
        console.log('NFT clicked:', index);
        // Could implement a modal or detail view here
        window.open('https://magiceden.us/marketplace/the_growerz', '_blank');
    }

    /**
     * Get random NFT image for slot machine
     */
    getRandomNFTImage() {
        const randomIndex = Math.floor(Math.random() * this.nftImages.length);
        return this.nftImages[randomIndex];
    }

    /**
     * Get random symbol for slot machine
     */
    getRandomSymbol() {
        const randomIndex = Math.floor(Math.random() * this.symbols.length);
        return this.symbols[randomIndex];
    }

    /**
     * Get all symbols
     */
    getSymbols() {
        return this.symbols;
    }

    /**
     * Get all NFT images
     */
    getNFTImages() {
        return this.nftImages;
    }

    /**
     * Get random slot item (mix of NFTs and symbols)
     */
    getRandomSlotItem() {
        // 50% chance of NFT image, 50% chance of symbol
        if (Math.random() < 0.5) {
            return {
                type: 'image',
                value: this.getRandomNFTImage()
            };
        } else {
            return {
                type: 'symbol',
                value: this.getRandomSymbol()
            };
        }
    }
}

// Export NFT manager instance
const nftManager = new NFTManager();
