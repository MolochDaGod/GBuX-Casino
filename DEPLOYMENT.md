# 🚀 Deployment Guide for GBuX Casino

## Quick Deploy Options

### 1. GitHub Pages (Recommended)

**Free and automatic deployment from GitHub:**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `copilot/fix-3b3279f0-72c6-428e-a94e-56f43f58d2e8` or `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://molochdagod.github.io/GBuX-Casino/`

**Note:** It may take a few minutes for the site to become available.

### 2. Netlify

**One-click deployment:**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MolochDaGod/GBuX-Casino)

**Or manual deployment:**

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Select your GBuX-Casino repository
5. Build settings (use defaults):
   - Build command: (leave empty)
   - Publish directory: (leave empty or `/`)
6. Click "Deploy site"

Your site will be live at: `https://[random-name].netlify.app`

### 3. Vercel

**One-click deployment:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MolochDaGod/GBuX-Casino)

**Or manual deployment:**

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GBuX-Casino repository
5. Framework Preset: **Other**
6. Build settings (use defaults):
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
7. Click "Deploy"

Your site will be live at: `https://gbux-casino.vercel.app`

### 4. Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select your GBuX-Casino repository
4. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
5. Click "Save and Deploy"

### 5. Traditional Web Hosting

For any web host (Bluehost, HostGator, GoDaddy, etc.):

1. Download all files from the repository
2. Upload to your web host via FTP/SFTP to the `public_html` or `www` directory
3. Ensure the file structure remains the same
4. Your site will be live at your domain

**Required files:**
```
/
├── index.html
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── main.js
│       ├── nft.js
│       ├── slots.js
│       └── wallet.js
```

## Testing Your Deployment

After deployment, verify these features work:

1. **Page Loads**: The casino interface appears
2. **Styling**: Grudge Studio branding is visible (gold on black)
3. **Slot Machine**: Can spin the reels and see results
4. **NFT Gallery**: The Growerz collection displays
5. **Wallet Connect**: Button is present (requires Phantom wallet extension)
6. **Responsive**: Works on mobile devices

## Custom Domain Setup

### GitHub Pages

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Add a CNAME record in your DNS:
   ```
   CNAME record: www → molochdagod.github.io
   ```

### Netlify / Vercel / Cloudflare

1. Go to your project settings
2. Click "Domain settings" or "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions provided

## Environment Configuration

The app works out of the box with no configuration needed!

**Optional customizations** (edit in the code):

- **Starting Balance**: Edit `balance = 1000` in `public/js/slots.js`
- **Bet Limits**: Edit `min="1" max="100"` in `index.html`
- **NFT Images**: Edit the `nftImages` array in `public/js/nft.js`
- **Colors**: Edit CSS variables in `public/css/styles.css`

## Troubleshooting

### Site not loading?

- Check that all files were uploaded correctly
- Verify the `index.html` is in the root directory
- Clear your browser cache

### Wallet not connecting?

- Install [Phantom Wallet](https://phantom.app/)
- The wallet integration is optional - the casino works without it

### NFT images not showing?

- This is expected if imgur.com is blocked by your network
- The casino still works with emoji symbols
- For production, host the NFT images on your own CDN

## Performance Tips

1. **CDN**: Use a CDN for static assets (already optimized)
2. **Caching**: Set cache headers (already configured in netlify.toml)
3. **Compression**: Enable gzip (most hosts do this automatically)
4. **Images**: NFT images load lazily (already implemented)

## Security Notes

- All transactions are simulated (no real cryptocurrency)
- Wallet connection is optional and for demonstration only
- Security headers are configured in netlify.toml
- No sensitive data is stored or transmitted

## Support

For issues or questions:
- Check the [README.md](README.md)
- Review the code comments
- Contact: Grudge Studio at https://www.grudgestudio.com

---

**Ready to deploy? Choose an option above and launch your casino!** 🎰
