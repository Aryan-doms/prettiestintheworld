#!/bin/bash

# Deploy script for SEO updates
echo "Deploying SEO updates to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment complete!"
echo "Remember to check the new SEO features at https://prettiestintheworld.com"
