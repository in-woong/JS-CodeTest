function solution(nums, target) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let array = threeSum(nums.slice(i + 1), target - nums[i]);
    array = array.map((item) => [nums[i], ...item]);
    for (let j = 0; j < array.length; j++) {
      if (!isInclude(result, array[j])) {
        result.push(array[j]);
      }
    }
  }
  return result;
}
function isInclude(result, array) {
  for (let i = 0; i < result.length; i++) {
    if (
      result[i][0] == array[0] &&
      result[i][1] == array[1] &&
      result[i][2] == array[2] &&
      result[i][3] == array[3]
    ) {
      return true;
    }
  }
  return false;
}

function threeSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        const array = [nums[i], nums[left], nums[right]];

        if (!isInclude(result, array)) {
          result.push(array);
        }
        right--;
      }
    }
  }
  return result;
}

const input = [
  [[1, 0, -1, 0, -2, 2], 0],
  [[2, 2, 2, 2, 2], 8],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
