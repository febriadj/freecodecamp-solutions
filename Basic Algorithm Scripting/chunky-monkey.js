function chunkArrayInGroups(arr, size) {
  let newArr;

  for (const i in arr) {
    newArr = arr.splice(i, size);
    arr.unshift(newArr);
  }
  
  return arr.reverse();
}

console.log(
  chunkArrayInGroups(["a", "b", "c", "d"], 2)
);