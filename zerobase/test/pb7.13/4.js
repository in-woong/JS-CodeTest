function solution(num) {
  const array = num
    .toString()
    .split('')
    .map((v) => Number(v));

  return Math.min(...array);
}
