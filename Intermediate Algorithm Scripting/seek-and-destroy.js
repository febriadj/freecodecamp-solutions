function destroyer(arr) {  
  let newArr = [], args = [];
  
  args.push(...[...arguments]);
  args.shift();

  newArr = [...arr, ...args].filter(item => {
    return arr.indexOf(item) < 0 || args.indexOf(item) < 0;
  });
   
  return newArr;
}

console.log(
  destroyer([1, 2, 3, 1, 2, 3], 2, 3)
);