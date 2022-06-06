// function solution(s) {
//   let n = s.length;
//   do {
//     if (findPalindromic(s, n)) return findPalindromic(s, n);
//     n--;
//   } while (n >= 0);
//   return false;
// }

// function findPalindromic(s, n) {
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + n; j < s.length + 1; j++) {
//       const string = s.substring(i, j);
//       if (isPalindromic(string)) return string;
//     }
//   }
//   return false;
// }

function isPalindromic(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
}

function solution(s) {
  let maxLength = 1;
  let result = s[0] || '';
  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (i - j + 1 > maxLength) {
        const str = s.substring(j, i);
        if (isPalindromic(str)) {
          maxLength = str.length;
          result = str;
          break;
        }
      }
    }
  }
  return result;
}

const input = ['babad', 'cbbd', 'bb', 'a', 'ac'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
