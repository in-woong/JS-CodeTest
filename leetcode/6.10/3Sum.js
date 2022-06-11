// function solution(nums) {
//   if (nums.length < 3) return [];
//   const array = combination(nums, 3);
//   console.log(array);
//   const result = [];
//   for (const [i, j, k] of array) {
//     if (i + j + k === 0) {
//       result.push([i, j, k]);
//     }
//   }
//   return result;
// }

// function combination(arr, n) {
//   if (n === 1) return arr.map((v) => [v]);

//   let result = [];
//   arr.forEach((fixed, idx, arr) => {
//     const rest = arr.slice(idx + 1);
//     const combine = combination(rest, n - 1);
//     const combins = combine.map((v) => [fixed, ...v]);
//     result.push(...combins);
//   });
//   return result;
// }

function solution(nums) {
  let resultArr = [];
  const sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 2; i++) {
    if (sortedArr[i] > 0) {
      break;
    }
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = sortedArr.length - 1;
    while (left < right) {
      const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        while (left < right && sortedArr[left] == sortedArr[left + 1]) {
          left++;
        }
        while (left < right && sortedArr[right == sortedArr[right - 1]]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return resultArr;
}
const input = [[-1, 0, 1, 2, -1, -4], [], [0]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
