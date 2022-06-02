function solution(info, query) {
  let infoArray = [];
  let queryArray = [];
  let answer = [];
  info.forEach((a) => infoArray.push(a.split(' ')));
  query.forEach((a) =>
    queryArray.push(a.split(' ').filter((b) => b !== 'and' && b !== '-'))
  );
  for (let i = 0; i < queryArray.length; i++) {
    let count = 0;
    for (let j = 0; j < infoArray.length; j++) {
      for (let k = 0; k < queryArray[i].length; k++) {
        if (k == queryArray[i].length - 1) {
          if (
            Number(queryArray[i][k]) <=
            Number(infoArray[j][infoArray[j].length - 1])
          ) {
            count++;
          }
        } else {
          if (!infoArray[j].includes(queryArray[i][k])) {
            break;
          }
        }
      }
    }
    answer.push(count);
  }

  return answer;
}

const input = [
  [
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
