/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = nums.length;
  if (isAscending(nums)) return true;
  while (count > 0) {
    if (checkSorted(nums)) return true;
    count--;
    const element = nums.shift();
    nums.push(element);
  }
  return false;
};

function checkSorted(nums) {
  const sortedNums = nums.slice().sort((a, b) => a - b);
  console.log(sortedNums, nums);
  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] !== nums[i]) return false;
  }
  return true;
}
function isAscending(arr) {
  return arr.every((x, i) => {
    return i === 0 || x >= arr[i - 1];
  });
}
