function solution(live, commands) {
  const answer = [];
  for (const [idx, count] of commands) {
    live = live.map((item, i) => {
      if (i == idx - 1) {
        return Number(item) - Number(count);
      }
      return item;
    });
    answer.push(groupCount(live));
  }
  return answer;
}

function groupCount(live) {
  let count = 0;
  let temp;
  for (let i = 0; i < live.length; i++) {
    if (i == 0) {
      temp = live[i];
      count++;
    } else {
      if (temp > live[i]) {
        count++;
        temp = live[i];
      }
    }
  }
  return count;
}

const input = [
  [
    [6, 89, 86, 31, 88, 48, 13, 93, 75, 38],
    [
      [10, 21],
      [5, 68],
      [7, 12],
      [4, 18],
      [4, 4],
    ],
  ],
  [
    [20, 32, 37, 7, 2, 57, 94],
    [
      [1, 16],
      [5, 1],
      [4, 3],
      [7, 19],
      [4, 2],
      [3, 32],
    ],
  ],
  [
    [85, 60],
    [
      [2, 35],
      [1, 20],
      [1, 15],
      [1, 30],
      [2, 7],
    ],
  ],
  [
    [25, 12, 94, 57],
    [
      [4, 48],
      [3, 11],
      [1, 21],
      [2, 11],
      [3, 78],
    ],
  ],
  [
    [23, 59, 97, 73, 26, 68],
    [
      [4, 45],
      [2, 33],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
