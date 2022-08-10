function solution(arr) {
  while (arr.length > 1) {
    const newArr = [];
    const n = arr.length;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0 && 0 <= i && i < n / 2) {
        newArr[i] = arr[i * 2] + arr[i * 2 + 1];
      } else if (i % 2 == 1 && 0 <= i && i < n / 2) {
        newArr[i] = arr[i * 2] - arr[i * 2 + 1];
      }
    }
    arr = newArr;
  }
  return arr[0];
}
