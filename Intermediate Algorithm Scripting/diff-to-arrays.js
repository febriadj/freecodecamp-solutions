function diffArray(arr1, arr2) {
  let newArr = [];
  
  newArr = [...arr1, ...arr2].filter(item => {
    return arr2.indexOf(item) < 0 || arr1.indexOf(item) < 0;
  });
   
  return newArr;
}

console.log(
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
);