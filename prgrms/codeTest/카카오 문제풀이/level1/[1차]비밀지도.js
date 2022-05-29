function solution(n, arr1, arr2) {
  const result = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ' ')
  );
  let answer1 = [];
  let answer2 = [];
  for (let i = 0; i < arr1.length; i++) {
    const temp1 = arr1[i].toString(2).split('');
    while (temp1.length !== n) {
      temp1.unshift('0');
    }
    const temp2 = arr2[i].toString(2).split('');
    while (temp2.length !== n) {
      temp2.unshift('0');
    }
    answer1.push(temp1);
    answer2.push(temp2);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (answer1[i][j] == '1' || answer2[i][j] == '1') {
        result[i][j] = '#';
      }
    }
  }

  console.log(answer1, answer2);
  return result.map((item) => item.join(''));
}
const input = [
  [5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]],
  [6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1], input[i][2])}`);
}
