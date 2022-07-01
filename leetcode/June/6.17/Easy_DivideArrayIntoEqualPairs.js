function solution(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  const array = [...map.values()];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) return false;
  }
  return true;
}

const input = [
  [3, 2, 3, 2, 2, 2],
  [1, 2, 3, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
