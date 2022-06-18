function solution(nums) {
  let result = 0;
  const array = permutation(nums, 2);
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    const [a, b] = array[i];
    result += HammingDistance(a, b);
    console.log(result);
  }
  return result;
}

function permutation(arr, n) {
  if (n == 1) return arr.map((v) => [v]);
  let result = [];
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combine = permutation(rest, n - 1);
    const combins = combine.map((v) => [fixed, ...v]);
    result.push(...combins);
  });

  return result;
}
function HammingDistance(a, b) {
  const aArray = a.toString(2).split('');
  const bArray = b.toString(2).split('');
  console.log(aArray, bArray);
  const length = aArray.length < bArray.length ? bArray.length : aArray.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    const aResult = aArray[aArray.length - 1 - i] || 0;
    const bResult = bArray[bArray.length - 1 - i] || 0;
    if (aResult !== bResult) count++;
  }
  return count;
}

// function solution(nums) {
//   var tot = 0;
//   for (var i = 0; i < 32; i++) {
//     var count = 0;
//     for (var j = 0; j < nums.length; j++) {
//       count += (nums[j] >> i) & 1;
//       console.log(
//         i,
//         nums[j],
//         nums[j].toString(2),

//         nums[j] >> i,
//         (nums[j] >> i).toString(2),
//         (nums[j] >> i) & 1,
//         count
//       );
//     }

//     tot += count * (nums.length - count);
//     console.log('tot', tot);
//   }
//   return tot;
// }

const input = [
  [4, 14, 2],
  [4, 14, 4],
  [6, 1, 8, 6, 8],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
