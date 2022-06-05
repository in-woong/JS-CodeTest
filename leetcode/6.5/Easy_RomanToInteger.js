// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

function solution(s) {
  const characters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const sArray = s.split('');
  let result = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === 'I') {
      if (
        (sArray.length - 1 >= i + 1 && sArray[i + 1] == 'V') ||
        sArray[i + 1] == 'X'
      ) {
        result -= 1;
      } else {
        result += 1;
      }
    } else if (sArray[i] === 'V') {
      result += 5;
    } else if (sArray[i] === 'X') {
      if (
        (sArray.length - 1 >= i + 1 && sArray[i + 1] == 'L') ||
        sArray[i + 1] == 'C'
      ) {
        result -= 10;
      } else {
        result += 10;
      }
    } else if (sArray[i] === 'L') {
      result += 50;
    } else if (sArray[i] === 'C') {
      if (
        (sArray.length - 1 >= i + 1 && sArray[i + 1] == 'D') ||
        sArray[i + 1] == 'M'
      ) {
        result -= 100;
      } else {
        result += 100;
      }
    } else if (sArray[i] === 'D') {
      result += 500;
    } else if (sArray[i] === 'M') {
      result += 1000;
    }
  }
  return result;
}

const input = ['III', 'LVIII', 'MCMXCIV', 'MCDLXXVI'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
