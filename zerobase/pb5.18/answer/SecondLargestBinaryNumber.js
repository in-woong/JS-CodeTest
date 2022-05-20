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
  for (; max > 0; max >>= 1) {
    console.log(max, n, max & n, count);
    if (max & n) {
      if (count === 1) {
        console.log('continue');
        count++;
        continue;
      }

      count++;
      n -= max;
    }
  }
  console.log('return', n);
  return n;
}
const input = [6, 1, 123];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
