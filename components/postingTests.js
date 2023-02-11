const postings = [
  {
      key: 100,
      name: 'Bing Chilling',
      price: 350,
      image: require('../assets/bingchilling.png'),
      description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
  },
  {
      key: 101,
      name: 'Zǎoshang hǎo zhōngguó xiànzài wǒ yǒu bīngqílín wǒ hěn xǐhuān bīngqílín',
      price: 600,
      image: require('../assets/bingchilling.png'),
      description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
  },
  {
      key: 102,
      name: 'Zhao Shang Hao',
      price: 2,
      image: require('../assets/bingchilling.png'),
      description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
  }
];
export function getPostings() {
  return postings;
}
export function getPosting(key) {
  return postings.find((item) => (item.key == key));
}