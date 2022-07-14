function solution(arr, n) {
  let curMin = null;
  arr.forEach(
    (num) =>
      (curMin = n <= num && (curMin === null || num < curMin) ? num : curMin)
  );
  return curMin === null ? -1 : curMin;
}
