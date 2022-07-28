function solution(arr, K) {
  arr = arr.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % K == 0) {
      answer += arr[i];
    }
  }
  return answer;
}
