function palindrome(str) {
  const newStr = str.replace(/[\s_.]/g, "");

  if (/[^\w\s.]/g.test(str) == true && /\s/g.test(str) == true) {
    return true;
  }

  for (let i = 0; i < newStr.length; i++) {
    if (i < newStr.length / 2) {
      if (newStr.charAt(i) != newStr.charAt(newStr.length - i - 1)) {
        return false;
      }
    }
  }
  
  return true;
}

console.log(palindrome("eye"));