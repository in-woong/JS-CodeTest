function solution(now, tobe) {
  let count = 0;
  for (let i = 0; i < now.length; i++) {
    if (now[i] < tobe[i]) {
      count += tobe[i] - now[i];
    } else if (now[i] > tobe[i]) {
      count += now[i] + tobe[i];
    }
    console.log(count);
  }
  return count;
}

const input = [
  [
    [1, 2, 3, 4, 5],
    [6, 5, 4, 2, 0],
  ],
  [
    [0, 6],
    [5, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
