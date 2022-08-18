/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  let maxValue = -1;
  for (item in obj) {
    maxValue = maxValue < obj[item] ? obj[item] : maxValue;
  }
  const array = [];
  for (item in obj) {
    if (obj[item] == maxValue) {
      array.push(Number(item));
    }
  }
  let answer = Infinity;

  for (let i = 0; i < array.length; i++) {
    let first = -1;
    let last = -1;

    for (let j = 0; j < nums.length; j++) {
      if (array[i] == nums[j]) {
        if (first == -1) first = j;
        last = j;
      }
    }
    console.log(last, first);
    const temp = last - first + 1;
    answer = answer > temp ? temp : answer;
  }

  return answer;
};
