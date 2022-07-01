// function solution(n) {
//   const result = factorial(n);
//   if (Number(result) >= 10) {
//     const array = result.toString().split('').reverse();
//     console.log(array);
//     for (let i = 0; i < array.length; i++)
//       if (Number(array[i]) !== 0) {
//         return i;
//       }
//   } else {
//     return 0;
//   }
// }

// function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// }

function solution(n) {
  let answer = 0;
  for (let i = 5; i <= n; i *= 5) {
    answer += Math.floor(n / i);
  }
  return answer;
}

const input = [3, 5, 0, 30];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
