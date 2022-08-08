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
  //최대 길이가 101이기 때문에, sliding Windows처럼 앞에서부터 첫번째, 두번째, 세번째의 원소들을 다 짤라서 prefixSums에 넣어놓았다.

  const res = [];

  for (let i = 0; i < queries.length; ++i) {
    const [left, right] = queries[i];

    const start = prefixSums[left];
    const end = prefixSums[right + 1];
    console.log('start', start);
    console.log('end', end);
    const intersect = new Array(101).fill(0);

    for (let i = 0; i < 101; ++i) {
      intersect[i] = end[i] - start[i];
    }
    console.log('inter', intersect);
    let last = -1;
    let minDiff = MAX;

    for (let i = 1; i <= 100; ++i) {
      if (intersect[i] === 0) continue;

      if (last == -1) {
        //첫 원소를 구분
        last = i;
      } else {
        //원소가 몇인지 구분
        //어짜피 가장 옆에있는 값끼리 차를 구해야지, 안그러면
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
