const findElement = (arr, func) => arr.filter(func)[0];

console.log(
  findElement([1, 2, 3, 4], num => num % 2 === 0)
);