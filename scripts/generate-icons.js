const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/logo.svg'));

// Ensure the icons directory exists
const iconsDir = path.join(__dirname, '../src-tauri/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate icons in different sizes
const sizes = [
  { size: 32, name: '32x32.png' },
  { size: 128, name: '128x128.png' },
  { size: 256, name: '128x128@2x.png' },
  { size: 512, name: 'icon.png' },
];

sizes.forEach(({ size, name }) => {
  sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(path.join(iconsDir, name))
    .catch((err) => console.error(`Error generating ${name}:`, err));
});
