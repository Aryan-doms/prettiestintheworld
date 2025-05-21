#!/bin/bash

# Image Optimization Script for SEO Performance
# This script helps optimize images for better page loading speed
# To use: Install ImageMagick first with 'brew install imagemagick'

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}==== Image Optimization for SEO Performance ====${NC}"
echo "This script will optimize images in the images directory"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "${RED}Error: ImageMagick is not installed${NC}"
    echo "Please install it with: brew install imagemagick"
    exit 1
fi

# Create backup directory
BACKUP_DIR="./images_backup"
if [ ! -d "$BACKUP_DIR" ]; then
    echo "Creating backup directory..."
    mkdir -p "$BACKUP_DIR"
fi

# Copy original images to backup
echo "Backing up original images..."
cp -r ./images/* "$BACKUP_DIR/"

# Optimize JPG images
echo -e "${GREEN}Optimizing JPG images...${NC}"
find ./images -name "*.jpg" -o -name "*.jpeg" | while read img; do
    echo "Processing $img"
    convert "$img" -strip -quality 85 -resize '1600x1600>' "$img"
done

# Optimize PNG images
echo -e "${GREEN}Optimizing PNG images...${NC}"
find ./images -name "*.png" | while read img; do
    echo "Processing $img"
    convert "$img" -strip -quality 85 -resize '1600x1600>' "$img"
done

# Create WebP versions
echo -e "${GREEN}Creating WebP versions of images...${NC}"
find ./images -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read img; do
    webp_name="${img%.*}.webp"
    echo "Creating $webp_name"
    convert "$img" -quality 80 "$webp_name"
done

echo -e "${BLUE}==== Image Optimization Complete ====${NC}"
echo "Original images backed up to $BACKUP_DIR"
echo "Images optimized and WebP versions created"
echo -e "${GREEN}This will improve your page load speed and SEO performance!${NC}"
