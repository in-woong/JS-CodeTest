// function solution(s) {
//   let max = palindromic(s);
//   if (s.length <= 1) return s.length;

//   for (let i = 0; i < s.length; i++) {
//     const sArray = s.split('');
//     const newArray = [...sArray.slice(0, i), ...sArray.slice(i + 1)];
//     const temp = palindromic(newArray);
//     max = max < temp ? temp : max;
//   }
//   return max;
// }

// function palindromic(s) {
//   let temp = '';
//   let count = 1;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == temp) {
//       count++;
//       max = max < count ? count : max;
//     } else {
//       count = 1;
//       temp = s[i];
//     }
//   }
//   return max;
// }

function solution(st) {
  var dp = [];

  function findLPSLengthRecursive(st, startIndex, endIndex) {
    console.log(dp, st, startIndex, endIndex);
    if (startIndex > endIndex) return 0;

    // every sequence with one element is a palindrome of length 1
    if (startIndex === endIndex) return 1;

    dp[startIndex] = dp[startIndex] || [];

    if (typeof dp[startIndex][endIndex] === 'undefined') {
      // case 1: elements at the beginning and the end are the same
      if (st[startIndex] === st[endIndex]) {
        dp[startIndex][endIndex] =
          2 + findLPSLengthRecursive(st, startIndex + 1, endIndex - 1);
      } else {
        // case 2: skip one element either from the beginning or the end
        let c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex);
        let c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1);
        dp[startIndex][endIndex] = Math.max(c1, c2);
      }
    }

    return dp[startIndex][endIndex];
  }

  return findLPSLengthRecursive(st, 0, st.length - 1);
}

const input = ['bbbab', 'cbbd', 'aabaa'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
