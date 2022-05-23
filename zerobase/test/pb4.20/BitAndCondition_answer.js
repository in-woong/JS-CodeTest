function solution(arr) {
  if (!arr.legnth) return 0;

  return arr.map((c) => parseInt(c, 2)).reduce((pre, cur) => pre & cur);
}
