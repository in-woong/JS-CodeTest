function solution(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split(' ').length;
    max = max < temp ? temp : max;
  }
  return max;
}
