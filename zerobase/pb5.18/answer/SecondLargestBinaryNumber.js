/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += getSecondLargestBitNumber(i);
  }
  return result;
}

function getSecondLargestBitNumber(n) {
  let max = 1 << 30;
  let count = 0;
  console.log(n);
  // for (; max > 0; max >>= 1) {
  //   console.log(max, n, max & n);
  //   if (max & n) {
  //     if (count === 1) {
  //       count++;
  //       continue;
  //     }

  //     count++;
  //     n -= max;
  //   }
  // }

  return n;
}
const input = [6, 1, 100, 123, 234, 10000];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
