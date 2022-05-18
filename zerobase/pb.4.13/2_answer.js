function solution(N, K) {
  let arr = N.toString().split('');
  let insert = 0;

  if (N >= 0) {
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) <= K) {
        arr.splice(i, 0, K.toString());
        insert = 1;
        break;
      }
    }
  } else {
    console.log(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      if (Number(arr[i] > K)) {
        arr.splice(i, 0, K.toString());
        insert = 1;
        break;
      }
    }
  }
  if (insert == 0) {
    arr.push(K.toString());
  }
  return Number(arr.join(''));
}

const input = [
  [278, 3],
  [418, 3],
  [438, 3],
  [-278, 3],
  [-5439, 5],
  [-438, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
