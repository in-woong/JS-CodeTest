function solution(arr) {
  const answer = new Set();
  for (let i = 0; i < arr.length; i++) {
    arr[i].split(' ').forEach((item) => answer.add(item));
  }

  return answer.size;
}
