function solution(arr) {
  let sum = 0;
  arr = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}
