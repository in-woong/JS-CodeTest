function solution(arr, t) {
  let time = 0;
  for (let i = 0; i < arr.length; i++) {
    time += t * (arr[i] + 1);
  }
  return time;
}
