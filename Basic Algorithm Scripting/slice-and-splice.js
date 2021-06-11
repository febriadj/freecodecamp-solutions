function frankenSplice(arr1, arr2, n) {
  const result = [...arr2];

  result.splice(n, 0, ...arr1);
  return result;
}

console.log(
  frankenSplice([1, 2], ["a", "b", "c", "d"], 2)
);