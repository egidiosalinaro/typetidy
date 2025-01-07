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

// Define the icon sizes we need
const sizes = {
  '32x32.png': 32,
  '128x128.png': 128,
  '128x128@2x.png': 256,
  'icon.png': 1024, // This will be our base for other formats
};

// Generate PNG icons
Object.entries(sizes).forEach(([filename, size]) => {
  sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(path.join(iconsDir, filename))
    .then(() => console.log(`Generated ${filename}`))
    .catch((err) => console.error(`Error generating ${filename}:`, err));
});
