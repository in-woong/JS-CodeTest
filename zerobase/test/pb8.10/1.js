function solution(arr) {
  const n = arr.length;
  const answer = arr.slice();
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2) {
      answer.splice(i + count, 0, arr[i]);

      answer.pop();

      count++;
    }
  }
  return answer;
}
