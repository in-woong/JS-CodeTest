var minAbsoluteSumDiff = function (nums1, nums2) {
  const n = nums1.length;
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.abs(nums1[i] - nums2[i]));
  }

  const diffArray = [];
  for (let i = 0; i < n; i++) {
    const item = array[i];
    let diff = -1;

    for (let j = 0; j < n; j++) {
      const tempDiff = item - Math.abs(nums2[i] - nums1[j]);
      diff = diff < tempDiff ? tempDiff : diff;
    }
    diffArray.push(diff);
  }

  const diff = Math.max(...diffArray);
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  return (sum - diff) % (1e9 + 7);
};
