function bouncer(arr) {
  return arr.filter(val => Boolean(val) === true);
}

console.log(
  bouncer([7, "ate", "", false, 9])
);