function confirmEnding(str, target) {
  const word = String(str).search(target, str.length);

  if (str[word] == str[word + 1]) {
    return false;
  }

  return word > 0 && target.length < 13 ? true : false;
}

console.log(
  confirmEnding("Bastian", "n")
);