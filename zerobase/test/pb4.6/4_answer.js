function solution(A) {
  let answer = 0;
  let length = A.length;

  console.log(A.sort());
  A.sort();
  while (length > 0) {
    if (length % 2 == 1) {
      answer += length * A[A.length - 1];
      A.pop();
      console.log(answer, A);
    } else {
      answer += length * A[0] * -1;
      A.shift();
      console.log(answer, A);
    }

    length -= 1;
  }
  return answer;
}

const input = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 3, 5, 7, 9],
  [1, 2, 3],
  [1, 2, 3, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i])}`);
}
