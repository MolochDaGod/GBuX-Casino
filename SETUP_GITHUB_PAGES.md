# 🚀 GitHub Pages Setup Instructions

## Quick Setup (5 minutes)

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/MolochDaGod/GBuX-Casino
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"** from the dropdown
5. **Save** (if there's a save button)

### Step 2: Trigger Deployment
The casino will automatically deploy when you:
- Merge this PR to `main` branch
- Push any changes to `main` branch
- Or manually trigger the workflow:
  1. Go to **Actions** tab
  2. Click on "Deploy to GitHub Pages" workflow
  3. Click "Run workflow"
  4. Select branch and click "Run workflow"

### Step 3: Access Your Casino
After deployment completes (1-2 minutes):
- **URL**: https://molochdagod.github.io/GBuX-Casino/
- Bookmark it for easy access!

## Verification

### Check Deployment Status
1. Go to **Actions** tab
2. Look for the latest "Deploy to GitHub Pages" workflow
3. Green checkmark ✅ = successful deployment
4. Red X ❌ = deployment failed (check logs)

### Test the Casino
1. Open: https://molochdagod.github.io/GBuX-Casino/
2. You should see the THC SPIN game
3. Try the demo mode (click SPIN without connecting wallet)
4. Install Phantom wallet to test real Web3 features

## Troubleshooting

### "404 - Page Not Found"
- Wait 2-3 minutes after deployment
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that GitHub Pages is enabled in Settings > Pages

### "Workflow Failed"
1. Go to Actions tab
2. Click on the failed workflow
3. Click on the job to see error details
4. Common issues:
   - GitHub Pages not enabled → Follow Step 1 above
   - Permission issues → Check repository Settings > Actions > Workflow permissions

### "Wallet Won't Connect"
- Make sure you have Phantom wallet installed
- Try refreshing the page
- Check browser console for errors (F12)
- Demo mode works without wallet connection

## What's Deployed

Your casino includes:
- ✅ THC SPIN slot machine game
- ✅ Phantom Wallet integration
- ✅ GBUX token support (55TpSoMNxbfsNJ9U1dQoo9H3dRtDmjBZVMcKqvU2nray)
- ✅ SOL support
- ✅ Demo mode for testing
- ✅ Responsive mobile design
- ✅ Game statistics tracking
- ✅ Cannabis/THC themed branding

## Customization

After deployment, you can customize:
- **Colors**: Edit `styles.css`
- **Game rules**: Edit `app.js`
- **Branding**: Edit `index.html`
- **Add images**: Upload to repository and reference in HTML

See DEPLOYMENT.md for detailed customization guide.

## Next Steps

1. ✅ Enable GitHub Pages (above)
2. ✅ Deploy the casino
3. 🎨 Customize branding with THC Growerz images
4. 🎮 Test with real GBUX tokens
5. 📢 Share your casino URL!

## Support

Need help?
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed docs
- Review [README.md](README.md) for features
- Open an issue on GitHub

---

**Ready to play? 🎰🌿**
