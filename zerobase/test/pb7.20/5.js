function solution(n, language) {
  //language를 통해 그래프 만들기
  const group = new Map();
  function find(group, first, second) {
    if (group.has(first)) {
      group.set(first, [...group.get(first), second]);
    } else {
      let count = true;
      const entries = [...group.entries()];
      for (let i = 0; i < entries.length; i++) {
        if (entries[i][1].includes(first)) {
          count = false;
          group.set(entries[i][0], [...group.get(entries[i][0]), second]);
        }
      }
      if (count) {
        group.set(first, [first, second]);
      }
    }
  }
  for (const lan of language) {
    find(group, lan[0], lan[1]);
  }
  const values = [...group.values()];
  console.log(values);
  let answerArray = [];
  for (let i = 0; i < n; i++) {
    let count = true;
    for (let j = 0; j < values.length; j++) {
      if (values[j].includes(i)) {
        count = false;
        break;
      }
    }
    if (count) {
      answerArray.push(1);
    }
  }
  for (let j = 0; j < values.length; j++) {
    answerArray.push(values[j].length);
  }
  console.log(answerArray);
  let sum = 0;
  for (let i = 0; i < answerArray.length; i++) {
    for (let j = i + 1; j < answerArray.length; j++) {
      sum += answerArray[i] * answerArray[j];
    }
  }
  return sum;
}

const input = [
  [4, [[0, 2]]],
  [
    10,
    [
      [0, 2],
      [1, 8],
      [1, 4],
      [2, 8],
      [2, 6],
      [3, 5],
      [6, 9],
    ],
  ],
  [
    5,
    [
      [0, 1],
      [2, 3],
      [0, 4],
    ],
  ],
  [6, [[0, 1, 2, 3, 4]]],
  [
    4,
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
  ],
];
//5,23,6,14,0
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
//Map(1) { 0 => [ 0, 2 ] }
// 1:6
// Map(3) { 0 => [ 0, 2, 8, 6, 9 ], 1 => [ 1, 8, 4 ], 3 => [ 3, 5 ] }
// 2:6
// Map(2) { 0 => [ 0, 1, 4 ], 2 => [ 2, 3 ] }
// 3:6
// Map(1) { 0 => [ 0, 1 ] }
// 4:6
// Map(1) { 0 => [ 0, 1, 2, 3 ] }
// 5:6
