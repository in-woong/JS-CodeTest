// function solution(nums, limit) {
//   nums = nums.map((v) => Number(v));
//   const map = new Map();
//   for (let i = 0; i < nums.length / 2; i++) {
//     const sum = nums[i] + nums[nums.length - 1 - i];
//     if (map.has(sum)) {
//       map.set(sum, map.get(sum) + 1);
//     } else {
//       map.set(sum, 1);
//     }
//   }
//   const array = [...map.entries()].sort((a, b) => a[0] - b[0]);

//   const max = Math.max(...map.values());
//   const sumArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i][1] == max) {
//       sumArray.push(array[i][0]);
//     }
//   }

//   console.log(sumArray);
//   let count = [];
//   for (let j = 0; j < sumArray.length; j++) {
//     let sum = sumArray[j];
//     let tempCount = 0;
//     for (let i = 0; i < nums.length / 2; i++) {
//       const temp = nums[i] + nums[nums.length - 1 - i];
//       if (sum !== temp) {
//         if (sum - nums[i] <= 0 || sum - nums[nums.length - 1 - i] <= 0) {
//           tempCount = Infinity;
//           break;
//         }
//         if (sum - nums[i] > limit || sum - nums[nums.length - i - 1] > limit) {
//           console.log(nums[i], '2');
//           tempCount += 2;
//         } else {
//           console.log(nums[i], '1');
//           tempCount++;
//         }
//       }
//     }
//     count.push(tempCount);
//     console.log(count);
//   }
//   return Math.min(...count);
// }

var solution = function (N, L) {
  let len = N.length,
    pfx = new Array(L * 2 + 1).fill(0),
    best = 0;
  for (let i = len / 2, a, b; i < len; i++) {
    (a = N[i]), (b = N[len - i - 1]);
    if (b > a) [a, b] = [b, a];
    pfx[b]++, pfx[a + b - 1]++, pfx[a + b]--, pfx[a + L]--;
  }
  for (let i = 1, sum = 0; i <= 2 * L; i++)
    (sum += pfx[i]), (best = sum > best ? sum : best);
  return len - best;
};

const input = [
  [[1, 2, 4, 3], 4],
  [[1, 2, 2, 1], 2],
  [[1, 2, 1, 2], 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
