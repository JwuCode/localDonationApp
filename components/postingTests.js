const postings = [
  {
      key: 100,
      name: 'Thermos',
      location: "New Delhi",
      image: require('../assets/thermos.jpg'),
      state: "Good Condition",
      description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
  },
  {
      key: 101,
      name: 'Textbook',
      location: 'New Delhi',
      image: require('../assets/book.jpg'),
      state: "Good Condition",
      description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
  },
  {
    key: 102,
    name: "Girl's Shoes",
    location: 'New Delhi',
    image: require('../assets/shoe3.png'),
    state: "Mildly Used",
    size:"22cm",
    distance:"6km",
  },
];
export function getPostings() {
  return postings;
}
export function getPosting(key) {
  return postings.find((item) => (item.key == key));
}