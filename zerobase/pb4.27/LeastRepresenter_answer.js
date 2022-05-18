function solution(arr) {
  arr.sort((a, b) => a - b);
  const repreresenters = [];
  for (let i = 0; i < arr.length / 2; i++) {
    const curMinIndex = i * 2;
    repreresenters.push(Math.max(arr[curMinIndex], arr[curMinIndex] + 1));
  }
  return repreresenters.reduce((pre, cur) => pre + cur, 0);
}
const input = [
  [4, 1, 3, 2],
  [0, 0],
  [1000, 1000],
  [2, 4, 10, 4, 10, 0, 7, 1, 0, 0],
  [
    181, 533, 173, 586, 200, 599, 460, 234, 272, 894, 451, 371, 163, 678, 983,
    213, 642, 22, 912, 994,
  ],
  [
    194, 147, 725, 307, 925, 345, 663, 378, 71, 374, 320, 705, 548, 329, 821,
    864, 263, 624, 50, 186, 207, 882, 607, 46, 966, 758, 869, 922, 648, 363,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
