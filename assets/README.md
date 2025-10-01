# Assets Directory

This directory is for storing custom images and media files for the casino.

## Recommended Assets

### THC Growerz Images
Add your THC Growerz character images here:
- `growerz-1.png` - Character 1
- `growerz-2.png` - Character 2
- `growerz-3.png` - Character 3
- etc.

### Branding Assets
From https://www.grudgestudio.com/branding:
- `logo.png` - Main casino logo
- `logo-icon.png` - Icon version
- `background.jpg` - Custom background image

### Slot Symbols
Custom slot machine symbols:
- `symbol-leaf.png` - Cannabis leaf
- `symbol-diamond.png` - Diamond
- `symbol-clover.png` - Four-leaf clover
- `symbol-fire.png` - Fire (jackpot)
- `symbol-star.png` - Star

## Usage in Code

### HTML
```html
<img src="assets/logo.png" alt="GBuX Casino Logo">
```

### CSS
```css
.background {
    background-image: url('../assets/background.jpg');
}
```

### JavaScript
```javascript
const symbolImages = {
    leaf: 'assets/symbol-leaf.png',
    diamond: 'assets/symbol-diamond.png',
    // etc.
};
```

## Image Guidelines

- **Format**: PNG with transparency for symbols and logos
- **Size**: 
  - Symbols: 256x256px recommended
  - Logo: 512x512px recommended
  - Background: 1920x1080px or larger
- **Optimization**: Compress images to reduce load time
- **Naming**: Use lowercase with hyphens (kebab-case)

## Current Implementation

The casino currently uses emoji symbols (🌿💎🍀🔥⭐) as placeholders. Replace these with your custom images by:

1. Upload images to this directory
2. Update `app.js` to use image paths instead of emojis
3. Update CSS for image sizing and positioning

---

*Add your custom THC Growerz and Grudge Studio branding assets here to personalize your casino!*
