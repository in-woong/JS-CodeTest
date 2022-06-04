function solution(relation) {
  //1. 키로 만들 수 있는 조합을 구한다.
  //2. 유일성을 만족 시키는지 확인
  //3. 최소성을 만족시키는지 확인

  //1. keyArray가 후보키로 만들 수 있는 조합
  const n = relation[0].length;
  let keyNum = [];
  let keyArray = [];
  for (let i = 0; i < n; i++) {
    keyNum.push(i);
  }
  for (let i = 1; i <= n; i++) {
    keyArray.push(...combination(keyNum, i));
  }

  let answer = [];
  //2.유일성을 마족시키는지 확인
  for (let i = 0; i < keyArray.length; i++) {
    if (minArray(keyArray[i], answer)) continue;
    if (uniqueKey(keyArray[i], relation)) answer.push(keyArray[i]);
  }
  console.log('answer', answer);
  return 1;
}

function minArray(keyArray, answer) {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].every((item) => keyArray.includes(item))) {
      return true;
    }
  }

  return false;
}

function combination(arr, n) {
  if (n == 1) return arr.map((v) => [v]);
  let result = [];
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combins = combination(rest, n - 1);
    const combine = combins.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}

function uniqueKey(keyArray, relations) {
  let values = [];

  for (const relation of relations) {
    let value = '';
    for (let i = 0; i < keyArray.length; i++) {
      value += relation[keyArray[i]];
    }
    if (!values.includes(value)) {
      values.push(value);
    } else {
      return false;
    }
  }

  return true;
}
const input = [
  [
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ],
  [
    ['a', 1, 'aaa', 'c', 'ng'],
    ['b', 1, 'bbb', 'c', 'g'],
    ['c', 1, 'aaa', 'd', 'ng'],
    ['d', 2, 'bbb', 'd', 'ng'],
  ],
  [
    ['a', '1', 'aaa', 'c', 'ng'],
    ['a', '1', 'bbb', 'e', 'g'],
    ['c', '1', 'aaa', 'd', 'ng'],
    ['d', '2', 'bbb', 'd', 'ng'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
