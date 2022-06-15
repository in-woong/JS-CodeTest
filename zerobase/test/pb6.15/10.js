//테스트 2 실패

function solution(N, language) {
  //1. language를 통해 language 그룹을 만든다.
  //0 부터 본인이 속해있는 그룹을 확인해서 선택 개수를 구한다
  // 계속 더한다.
  let result = 0;
  const group = makeGroup(language);

  for (let i = 0; i < N; i++) {
    const first = i;
    let count = 0;
    for (let j = 0; j < group.length; j++) {
      const index = group[j].indexOf(first);
      if (index > -1) {
        count = group[j].length - index - 1;

        break;
      }
    }
    result += N - (i + 1) - count;
  }
  return result;
}

function makeGroup(language) {
  const group = [];
  for (let i = 0; i < language.length; i++) {
    if (group.length == 0) {
      group.push(language[i]);
    } else {
      for (let j = 0; j < group.length; j++) {
        if (
          group[j].includes(language[i][0]) &&
          !group[j].includes(language[i][1])
        ) {
          group[j].push(language[i][1]);
          break;
        } else if (
          group[j].includes(language[i][1]) &&
          !group[j].includes(language[i][0])
        ) {
          group[j].push(language[i][0]);
          break;
        }
        if (j == group.length - 1) {
          group.push(language[i]);
          break;
        }
      }
    }
  }
  return group;
}
const input = [
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
  [1, [[0]]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
