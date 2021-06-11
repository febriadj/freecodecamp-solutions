function findLongestWordLength(str) {
  const len = [];

  for (let i = 0; i < str.split(" ").length; i++) {
    len.push(str.split(" ")[i].length);
  }

  return Math.max.apply(Math, len);
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);