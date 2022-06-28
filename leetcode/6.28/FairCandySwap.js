function solution(aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const bobSum = bobSizes.reduce((acc, cur) => acc + cur, 0);
  const diff = (aliceSum - bobSum) / 2;

  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      if (aliceSizes[i] - bobSizes[j] == diff) {
        return [aliceSizes[i], bobSizes[j]];
      }
    }
  }
}

const input = [
  [
    [1, 1],
    [2, 2],
  ],
  [
    [1, 2],
    [2, 3],
  ],
  [[2], [1, 3]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
