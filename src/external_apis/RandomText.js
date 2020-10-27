class RandomText {
  static getRandomText(num) {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${num}&start-with-lorem=1&format=json`;
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => err);
  }
}

export default RandomText;
