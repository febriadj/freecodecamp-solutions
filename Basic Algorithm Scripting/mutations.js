function mutation(arr) {
  const find = arr[1].toLowerCase().split("");

  for (let i = 0; i < find.length; i++) {
    if (arr[0].toLowerCase().indexOf(find[i]) == -1) {
      return false;
    }
  }

  return true;
}

console.log(
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
);