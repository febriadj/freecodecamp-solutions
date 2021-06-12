function getIndexToIns(arr, num) {
  const newArr = arr.concat(num).sort((a, b) => a - b);
  return newArr.findIndex(val => val === num);
}

console.log(getIndexToIns([2, 5, 10], 15));