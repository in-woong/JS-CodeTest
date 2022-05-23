function solution(A) {
  let count = 0;
  //짧은 순서대로 정렬
  A.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  console.log(A, 'A');

  while (A.length > 0) {
    let temp = A.shift();
    count++;
    console.log(temp, A);
    A.filter((a, b) => {
      if (temp[0] <= a[1] && temp[1] >= a[0]) {
        A.splice(b, 1);
      }
    });
    console.log(A);
  }
  return count;
}

const input = [
  [
    [0, 3],
    [1, 2],
    [0, 5],
    [4, 5],
  ],

  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ],

  [[0, 3]],

  [
    [0, 3],
    [0, 5],
    [1, 4],
    [2, 4],
    [4, 5],
  ],

  [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i])}`);
}
