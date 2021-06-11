function factorialize(num) {
  const arr = [];

  if (num == 0) return 1;

  for (let i = num; i > 0; i--) {
    arr.push(i);
  }

  return arr.sort((a, b) => a - b).reduce((acc, curr) => acc * curr);
}

console.log(factorialize(5));