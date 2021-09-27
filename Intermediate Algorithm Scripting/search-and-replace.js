function myReplace(str, before, after) {
  if (/[A-Z]/.test(before.charAt(0))) {
    after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
  } else {
    after = after.replace(after.charAt(0), after.charAt(0).toLowerCase());
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");