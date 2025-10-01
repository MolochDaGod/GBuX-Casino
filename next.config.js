/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['arweave.net', 'ipfs.io', 'nftstorage.link'],
  },
  env: {
    NEXT_PUBLIC_SOLANA_NETWORK: process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'devnet',
    NEXT_PUBLIC_NFT_COLLECTION: process.env.NEXT_PUBLIC_NFT_COLLECTION || '',
  },
}

module.exports = nextConfig
