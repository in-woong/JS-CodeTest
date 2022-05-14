function solution(begin, target, words) {
  let answers = [];
  //begin이 words에 있는지 확인 있으면 진행
  //word를 begin으로 선정 다음 바뀔 수 있는 것으로 바꿈
  //바뀐 word
  const queue = [begin];
  const visitArr = new Array(words.length).fill(false);

  let count = 0;
  let shiftedWord = '';
  let queueLeng = queue.length;

  while (queue.length > 0) {
    shiftedWord = queue.shift();
    console.log(shiftedWord, count, queue);
    queueLeng--;

    for (let i in words) {
      if (check(shiftedWord, words[i])) {
        if (visitArr[i] == true) continue;
        if (words[i] == target) return count + 1;
        visitArr[i] = true;

        queue.push(words[i]);
      }
    }

    if (queueLeng == 0) {
      count++;
      queueLeng = queue.length;
    }
  }
  return 0;
}

function check(standard, word) {
  let diffCtr = 0;

  if (standard.length != word.length) {
    return false;
  }

  for (let i = 0; i < standard.length; i++) {
    if (standard.charAt(i) != word.charAt(i)) diffCtr++;
    if (diffCtr > 1) return false;
  }
  return true;
}

const input = [
  ['hit', 'cog', ['hot', 'lot', 'dog', 'dot', 'log', 'cog']],
  ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
  ['aab', 'aba', ['abb', 'aba']],
  ['hit', 'hhh', ['hhh', 'hht']],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1], input[i][2])}`);
}
