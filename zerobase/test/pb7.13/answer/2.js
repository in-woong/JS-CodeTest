function solution(arr, n) {
  const MIN_VALUE = -1;
  let curMax = MIN_VALUE;
  arr.forEach((num) => (curMax = curMax < num && num <= n ? num : curMax));
  return curMax;
}
