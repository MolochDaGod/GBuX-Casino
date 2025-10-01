# GBuX Casino - Deployment Guide

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js.

#### Steps:

1. **Push your code to GitHub**
   ```bash
   git push origin main
   ```

2. **Sign up/Login to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

3. **Import Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Configure Environment Variables**
   Add these in the Vercel dashboard:
   
   ```
   NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
   NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
   NEXT_PUBLIC_NFT_COLLECTION_ADDRESS=your_collection_address
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

#### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL is automatically configured

---

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Same as Vercel

---

### Option 3: Self-Hosted (VPS/Cloud)

#### Requirements:
- Node.js 18+
- PM2 or similar process manager
- Nginx (reverse proxy)
- SSL certificate (Let's Encrypt)

#### Steps:

1. **Clone and Build**
   ```bash
   git clone <your-repo>
   cd GBuX-Casino
   npm install
   npm run build
   ```

2. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "gbux-casino" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL Certificate**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Environment Variables

### Production Settings

```env
# Network (use mainnet-beta for production)
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta

# RPC Endpoint
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com

# Optional: Use private RPC for better performance
# NEXT_PUBLIC_SOLANA_RPC_URL=https://your-private-rpc.com

# NFT Collection
NEXT_PUBLIC_NFT_COLLECTION_ADDRESS=your_collection_mint_address

# Optional: Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS=
```

### Development Settings

```env
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
```

---

## Pre-Deployment Checklist

### Essential
- [ ] Test all features on devnet
- [ ] Update environment variables for production
- [ ] Test wallet connections
- [ ] Verify NFT integration works
- [ ] Test all game mechanics
- [ ] Check responsive design on mobile
- [ ] Test transaction flows

### Performance
- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Optimize images
- [ ] Enable compression
- [ ] Configure caching headers
- [ ] Test with slow 3G connection

### Security
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Set up rate limiting at CDN level
- [ ] Review smart contract code (if using)
- [ ] Test with different wallet types
- [ ] Enable security headers

### Legal/Compliance
- [ ] Add Terms of Service
- [ ] Add Privacy Policy
- [ ] Add Responsible Gaming info
- [ ] Verify age requirements
- [ ] Check gambling laws in target jurisdictions
- [ ] Add cookie consent (if EU traffic)

---

## Post-Deployment

### Monitoring

1. **Vercel Analytics** (if using Vercel)
   - Enable in project settings
   - Monitor page load times
   - Track user engagement

2. **Error Tracking**
   - Set up Sentry or similar
   - Monitor console errors
   - Track failed transactions

3. **Performance Monitoring**
   - Use Vercel Speed Insights
   - Monitor Core Web Vitals
   - Track API response times

### Maintenance

1. **Regular Updates**
   ```bash
   npm update
   npm audit fix
   ```

2. **Dependency Security**
   - Enable Dependabot on GitHub
   - Review security alerts weekly
   - Update critical packages promptly

3. **Backups**
   - Database backups (if using)
   - Configuration backups
   - Regular code commits

---

## Scaling Considerations

### High Traffic Solutions

1. **CDN Configuration**
   - Vercel/Netlify include CDN
   - Cache static assets aggressively
   - Use edge functions for dynamic content

2. **RPC Endpoints**
   - Use dedicated RPC providers (GenesysGo, Triton)
   - Implement fallback endpoints
   - Monitor RPC health and latency

3. **Database**
   - Use managed services (Supabase, PlanetScale)
   - Enable connection pooling
   - Add read replicas for scaling

4. **Load Balancing**
   - Multiple deployment regions
   - Automatic scaling
   - Health checks

---

## Troubleshooting Deployment Issues

### Build Failures

**Issue**: Build fails with module errors
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

**Issue**: TypeScript errors
```bash
# Check types
npm run build
# Fix type errors in reported files
```

### Runtime Errors

**Issue**: Wallet not connecting in production
- Check HTTPS is enabled
- Verify environment variables
- Check browser console for errors
- Test with different wallets

**Issue**: NFT images not loading
- Verify image domains in next.config.js
- Check CORS settings
- Test image URLs manually

### Performance Issues

**Issue**: Slow page loads
- Enable compression
- Optimize images
- Reduce JavaScript bundle size
- Use code splitting

---

## Domain Configuration

### DNS Settings

```
Type  Name    Value               TTL
A     @       76.76.21.21        Auto
A     www     76.76.21.21        Auto
```

### SSL Certificate

Most hosting providers include free SSL:
- **Vercel**: Automatic
- **Netlify**: Automatic
- **Self-hosted**: Use Let's Encrypt

---

## Rollback Strategy

### Quick Rollback on Vercel

1. Go to Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Git Rollback

```bash
git revert HEAD
git push origin main
```

---

## Support

For deployment help:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Vercel Discord community
- GitHub Issues

---

## Cost Estimates

### Vercel Pro (Recommended for Production)
- **Plan**: $20/month per user
- **Includes**: 
  - Unlimited bandwidth
  - Analytics
  - DDoS protection
  - Support

### Self-Hosted VPS
- **DigitalOcean/Linode**: $12-24/month
- **AWS/GCP**: Variable (estimate $30-100/month)
- **Requires**: System administration knowledge

### RPC Services (Optional but Recommended)
- **GenesysGo**: $50-500/month
- **QuickNode**: $49-999/month
- **Triton**: Custom pricing

---

## Go Live Checklist

Final checks before public launch:

- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics enabled
- [ ] Error tracking configured
- [ ] Terms of Service live
- [ ] Privacy Policy live
- [ ] Contact/Support page
- [ ] Responsible gaming info
- [ ] Social media links
- [ ] Backup strategy in place
- [ ] Monitoring alerts configured
- [ ] Team notified of launch
- [ ] Marketing materials ready

**Ready to launch!** 🚀
