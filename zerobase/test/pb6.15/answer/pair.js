// [문제 설명]
// 제로베이스에서는 수강생들을 사용하는 프로그래밍 언어에 따라 그룹으로 분류하여 2명을 선택하고 싶습니다. 하지만 뽑힌 2명의 학생이 같은 프로그래밍 언어를 사용하면 안 됩니다.
// 입력으로 주어지는 배열에는 같은 언어를 사용하는 학생들이 짝을 지어 제공되고, 이를 그룹화하여 각자 다른 언어를 사용하는 2명을 뽑는 방법의 가짓수는 얼마나 있는지 판단해주시면 됩니다.
// 예를 들어,
// 4명의 학생이 존재하고 주어지는 배열이 [1,2], [2,3] 이라면, 학생은 0,1,2,3으로 4명이 존재하고 1번 학생과 2번 학생이 같은 언어, 2번 학생과 3번 학생이 같은 언어를 사용합니다.
// 고로, [0번 학생]과 [1,2,3번 학생] 2개의 그룹으로 나뉘어지게 되고, 가능한 가짓수는 [0,1], [0,2], [0,3]으로 3가지입니다.

function solution(n, language) {
  // Write your code here
  let ranks = [];
  for (let i = 0; i < n; i++) {
    ranks.push(-1);
  }

  for (let lan of language) {
    const [first, second] = lan;
    union(first, second);
  }

  function union(fir, sec) {
    let p1 = find(fir);
    let p2 = find(sec);

    if (p1 !== p2) {
      ranks[p2] = p1;
    }
  }

  function find(node) {
    if (ranks[node] !== -1) {
      return find(ranks[node]);
    }
    return node;
  }

  let curObj = {};
  console.log(ranks);
  for (let i = 0; i < ranks.length; i++) {
    let key = find(i);
    if (key in curObj) {
      curObj[key] += 1;
    } else {
      curObj[key] = 1;
    }
  }
  console.log('curObj', curObj);

  let answer = 0;
  let numbers = Object.values(curObj);

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer += numbers[i] * numbers[j];
    }
  }
  return answer;
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
