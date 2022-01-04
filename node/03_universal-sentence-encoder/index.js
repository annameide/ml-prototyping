const image = '../../assets/dancers.png';

const tf = require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');

const fs = require('fs');

const sentences = [
  'I like my phone.', 'Your cellphone looks great.', 'How old are you?',
  'What is your age?', 'An apple a day, keeps the doctors away.',
  'Eating strawberries is healthy.'
];

const app = async () => {
  // const model = await use.loadQnA();
  const model = await use.load();
  const embeddings = await model.embed(sentences);
  const data = [];

  for (let s = 0; s < sentences.length; s += 1) {
    values = tf.slice(embeddings, [s, 0], [1]).dataSync();
    data.push({
      sentence: sentences[s],
      vectors: Array.from(values)
    });
  }

  fs.writeFileSync('output.json', JSON.stringify(data), 'utf-8');
};
app();