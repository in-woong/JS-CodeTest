// function solution(N, stages) {
//   const arr = Array.from({ length: N + 1 }, () => [0, 0]);

//   for (let i = 0; i < stages.length; i++) {
//     const n = stages[i];
//     for (let j = 1; j < n; j++) {
//       arr[j][0]++;
//       arr[j][1]++;
//     }
//     if (n > N) continue;
//     arr[n][1]++;
//   }

//   console.log(arr);
//   const result = arr
//     .map((item, idx) => {
//       if (idx == 0) return [10, idx];
//       if (item[1] == 0) return [0, idx];
//       return [1 - item[0] / item[1], idx];
//     })
//     .sort((a, b) => b[0] - a[0]);
//   result.shift();
//   return result.map((item) => item[1]);
// }

function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach || 0]);
  }
  console.log(result);

  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
const input = [
  [5, [2, 1, 2, 6, 2, 4, 3, 3]],
  [4, [3, 3, 3, 3, 3]],
  [4, [4, 4, 4, 4, 4]],
  [5, [3, 3, 3, 3]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
