function solution(finish, submit) {
  let count = 0;
  for (let i = 0; i < finish.length; i++) {
    if (submit.includes(finish[i])) count++;
  }

  return count;
}

function solution(finish, submit) {
  const finishSet = new Set(finish);
  const submitSet = new Set(submit);

  const intersect = new Set([...finishSet].filter((x) => submitSet.has(x)));
  return intersect.size;
}

const input = [
  [[], ['A']],
  [[], []],
  [
    ['A', 'B', 'C'],
    ['B', 'Q'],
  ],
  [['A'], ['B']],
  [
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
