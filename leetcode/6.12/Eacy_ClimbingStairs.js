// function solution(n) {
//   const number = Number(n);
//   const two = Math.floor(number / 2);
//   let count = 0;
//   let result = [];
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= two; j++) {
//       if (2 * j + i == number) {
//         result.push([i, j]);
//       }
//     }
//   }
//   for (let i = 0; i < result.length; i++) {
//     let [one, two] = result[i];

//     let temp = one + two;

//     count += factorial(temp) / (factorial(one) * factorial(two));
//   }
//   return count;
// }
// function factorial(n) {
//   let result = 1;
//   if (n <= 1) return result;
//   result = n * factorial(n - 1);
//   return result;
// }
function solution(n) {
  if (n == 1) {
    return 1;
  }
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }
  return second;
}

const input = [2, 3, 5];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
