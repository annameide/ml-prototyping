const image = '../../assets/face2.jpg';

require('@tensorflow/tfjs');
const faceLandmarksDetection = require('@tensorflow-models/face-landmarks-detection');
const sizeOf = require('image-size');

const fs = require('fs');

const { createCanvas, loadImage } = require('canvas');

const dimensions = sizeOf(image);
const canvas = createCanvas(dimensions.width, dimensions.height);
const ctx = canvas.getContext('2d');

loadImage(image).then(async (img) => {
  ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);

  const model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh);

  const predictions = await model.estimateFaces({ 
    input: canvas
  });
  
  console.log(predictions[0].boundingBox);

  fs.writeFileSync('output.json', JSON.stringify(predictions));
});