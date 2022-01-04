const sharp = require('sharp');

sharp('../../assets/dancers.jpg')
  .resize({
    width: 500,
    height: 500,
    fit: 'contain',
    background: {r: 0, g: 0, b: 0, alpha: 1}
  })
  .png()
  .toFile('../../assets/dancers-crop.png');