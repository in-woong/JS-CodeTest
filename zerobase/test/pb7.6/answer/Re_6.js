function solution(stats, k) {
  stats.sort((a, b) => a - b);
  let m = new Map();
  for (let i = 0; i < stats.length; i++) {
    if (m.has(stats[i])) {
      m.set(stats[i], m.get(stats[i]) + 1);
    } else {
      m.set(stats[i], 1);
    }
  }

  let b = Array.from(m.entries());
  console.log(b);
  n = b.length;
  let maxL = 0;
  let maxR = 0;
  let max = 0;
  let startIndex = 0;
  let endIndex = 0;
  let prev = b[0][0] - 1;
  while (startIndex < n) {
    while (b[endIndex][1] >= k && b[endIndex][0] === prev + 1) {
      prev = b[endIndex][0];
      endIndex++;
      if (endIndex === n) break;
    }
    if (endIndex - startIndex > max) {
      maxR = b[endIndex - 1][0];
      maxL = b[startIndex][0];
      max = endIndex - startIndex;
    }
    if (endIndex === n) break;
    startIndex = b[endIndex][1] >= k ? endIndex : endIndex + 1;
    endIndex = startIndex;
    if (endIndex === n) break;
    prev = b[endIndex][0] - 1;
  }
  return max ? maxL + maxR : -1;
}

const input = [
  [[6, 3, 5, 2, 1], 1],
  [[4, 3, 4, 3, 3, 4], 4],
  [[1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], 2],
  [
    [
      15, 23, 28, 22, 41, 14, 13, 17, 44, 19, 26, 20, 21, 16, 24, 25, 12, 18,
      27,
    ],
    1,
  ],
  [[34], 1],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
