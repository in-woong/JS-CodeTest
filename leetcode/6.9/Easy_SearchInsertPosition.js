// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

function solution(nums, target) {
  if (nums[0] > target) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) {
      return i;
    } else if (i >= 1 && nums[i - 1] < target && nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

const input = [
  [[1, 3, 5, 6], 5],
  [[1, 3, 5, 6], 2],
  [[1, 3, 5, 6], 7],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
