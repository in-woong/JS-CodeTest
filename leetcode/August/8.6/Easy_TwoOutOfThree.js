/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const obj = {};
  const num1Set = Array.from(new Set(nums1));
  const num2Set = Array.from(new Set(nums2));
  const num3Set = Array.from(new Set(nums3));
  for (let i = 0; i < num1Set.length; i++) {
    if (obj[num1Set[i]]) {
      obj[num1Set[i]] = obj[num1Set[i]] + 1;
    } else {
      obj[num1Set[i]] = 1;
    }
  }

  for (let i = 0; i < num2Set.length; i++) {
    if (obj[num2Set[i]]) {
      obj[num2Set[i]] = obj[num2Set[i]] + 1;
    } else {
      console.log('obj', obj[num2Set[i]]);
      obj[num2Set[i]] = 1;
    }
  }

  for (let i = 0; i < num3Set.length; i++) {
    if (obj[num3Set[i]]) {
      obj[num3Set[i]] = obj[num3Set[i]] + 1;
    } else {
      obj[num3Set[i]] = 1;
    }
  }

  const answer = [];
  for (value in obj) {
    if (obj[value] >= 2) {
      answer.push(value);
    }
  }
  return answer;
};
