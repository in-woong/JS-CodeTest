// function solution(n) {
//   if (n == 1) {
//     return 10;
//   }
//   let ans = 1;
//   for (let i = 0; i < n; i += 2) {
//     ans = ans * (i == 0 ? 9 : 10);

//     ans %= 1_000_000_007;
//   }
//   return ans;
// }

function solution(n) {
  var answer = 0;
  let max = n === 1 ? n : 10 * (n - 1);
  for (let i = 1; i <= max; i++) {
    let reverse = Number(String(i).split('').reverse().join(''));
    if (i === reverse) answer++;
  }
  return answer % 100000007;
}

const input = [2, 1, 10000, 5014];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
