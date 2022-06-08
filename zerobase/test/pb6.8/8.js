function solution(N, K) {
  const array = [];
  for (let i = 1; i <= N; i++) {
    array.push(i);
  }
  const answer = Array.from({ length: N }, () => 0);

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let idx = element - K;

    if (idx <= 0) idx = N + idx;
    console.log(element, idx, answer);
    if (answer[idx - 1] == 0) {
      answer[idx - 1] = element;
      console.log(answer);
    } else {
      return -1;
    }
  }
  return answer;
}

const input = [
  [3, 2],
  [4, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
