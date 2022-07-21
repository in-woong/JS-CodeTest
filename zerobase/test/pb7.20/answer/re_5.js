function solution(n, language) {
  //아무 그룹에 속하지 못하면 -1;
  let group = Array.from({ length: n }, () => -1);

  for (let lan of language) {
    const [first, second] = lan;

    const rootFirst = find(first);
    const rootSecond = find(second);

    if (rootFirst !== rootSecond) {
      //무조건 첫번째 원소의 값이 root값, 두번째 요소를 변화시킨다.
      group[rootSecond] = rootFirst;
    }
  }

  function find(node) {
    if (group[node] !== -1) {
      return find(group[node]);
    }
    //끝까지 추적한 그룹 root값을 알 수 있다.
    return node;
  }

  let groupCount = {};
  for (let i = 0; i < n; i++) {
    const key = find(i);
    if (key in groupCount) {
      groupCount[key] += 1;
    } else {
      groupCount[key] = 1;
    }
  }

  const valueArray = Object.values(groupCount);
  let sum = 0;
  for (let i = 0; i < valueArray.length; i++) {
    for (let j = i + 1; j < valueArray.length; j++) {
      sum += valueArray[i] * valueArray[j];
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

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
