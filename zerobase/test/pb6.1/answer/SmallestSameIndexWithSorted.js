/**
 * @param nums {number[]}
 * @param n {number}
 * @return {number}
 */
function solution(nums, n) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) return i
  }

  return -1
}

export default solution
