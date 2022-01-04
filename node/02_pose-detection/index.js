const image = '../../assets/dancers.png';

require('@tensorflow/tfjs');
const poseDetection = require('@tensorflow-models/pose-detection');
const sizeOf = require('image-size');

const fs = require('fs');

const { createCanvas, loadImage } = require('canvas');

const dimensions = sizeOf(image);
const canvas = createCanvas(dimensions.width, dimensions.height);
const ctx = canvas.getContext('2d');

loadImage(image).then(async (img) => {
  ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);

  // BlazePose, PoseNet
  const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, {
    runtime: 'tfjs',
    //modelType: 'full'
    modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER
  });

  const predictions = await detector.estimatePoses(
    canvas,
    {
      maxPoses: 1,
      flipHorizontal: false
    }
  );
  
  console.log(predictions);

  fs.writeFileSync('output.json', JSON.stringify(predictions));
});