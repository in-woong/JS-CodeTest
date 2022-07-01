function solution(arr, a, b) {
  let curMin = null;
  arr.forEach((num) => {
    const isIn = a <= num && num <= b;
    const isMin = curMin === null || num < curMin;
    curMin = isIn && isMin ? num : curMin;
  });
  return curMin === null ? -1 : curMin;
}
