function convertToRoman(num) {
  const numeralCodes = [
    ["","I","II","III","IV","V","VI","VII","VIII","IX"],
    ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["","M","MM","MMM"]
  ];

  let numeral = "";
  const digits = num.toString().split('').reverse();
  
  for (let i = 0; i < digits.length; i++){
    numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
  }

  return numeral;
}
 
console.log(convertToRoman(36));