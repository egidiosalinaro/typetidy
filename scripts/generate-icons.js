const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the icons directory exists
const iconsDir = path.join(__dirname, '../src-tauri/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Read the SVG file
const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/logo.svg'));

// Define the icon sizes we need for macOS
const sizes = [
  { size: 16, filename: '16x16.png' },
  { size: 32, filename: '32x32.png' },
  { size: 64, filename: '32x32@2x.png' },
  { size: 128, filename: '128x128.png' },
  { size: 256, filename: '128x128@2x.png' },
  { size: 256, filename: '256x256.png' },
  { size: 512, filename: '256x256@2x.png' },
  { size: 512, filename: '512x512.png' },
  { size: 1024, filename: '512x512@2x.png' },
  { size: 1024, filename: 'icon.png' },
];

// Generate PNG icons
async function generateIcons() {
  for (const { size, filename } of sizes) {
    try {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(iconsDir, filename));
      console.log(`Generated ${filename}`);
    } catch (err) {
      console.error(`Error generating ${filename}:`, err);
    }
  }
}

generateIcons();
