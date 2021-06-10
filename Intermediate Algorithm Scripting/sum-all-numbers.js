function sumAll(arr) {
  let newArr = [], result = 0;

  arr.sort((a, b) => a - b);

  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }

  result = newArr.reduce((acc, curr) => acc + curr);
  return result;
}

console.log(sumAll([5, 10]));