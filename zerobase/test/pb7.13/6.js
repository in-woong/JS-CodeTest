function solution(arr, fee) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      let freeFee = Math.floor(arr[i] / 5);
      sum += fee * (arr[i] - freeFee);
    } else {
      sum += fee * arr[i];
    }
  }
  return sum;
}
