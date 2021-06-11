function titleCase(str) {
  const word = str.toLowerCase().split(" "), result = [];

  for (const i in word) {
    result.push(
      word[i].replace(word[i].charAt(0), word[i].charAt(0).toUpperCase())
    );
  }

  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));