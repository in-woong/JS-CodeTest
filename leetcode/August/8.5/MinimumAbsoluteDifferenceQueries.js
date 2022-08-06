/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const n = nums.length;
  const prefixSums = [];

  for (let i = 0; i <= n; ++i) {
    const num = nums[i];

    if (i === 0) {
      prefixSums[0] = new Array(101).fill(0);
    } else {
      prefixSums[i] = [...prefixSums[i - 1]];
      ++prefixSums[i][nums[i - 1]];
    }
  }

  console.log(prefixSums);

  const res = [];

  for (let i = 0; i < queries.length; ++i) {
    const [left, right] = queries[i];

    const start = prefixSums[left];
    const end = prefixSums[right + 1];

    const intersect = new Array(101).fill(0);

    for (let i = 0; i < 101; ++i) {
      intersect[i] = end[i] - start[i];
    }

    let last = -1;
    let minDiff = MAX;

    for (let i = 1; i <= 100; ++i) {
      if (intersect[i] === 0) continue;

      if (last == -1) {
        last = i;
      } else {
        const diff = i - last;

        minDiff = Math.min(minDiff, diff);

        last = i;
      }
    }

    if (minDiff === MAX) res[i] = -1;
    else res[i] = minDiff;
  }

  return res;
};
