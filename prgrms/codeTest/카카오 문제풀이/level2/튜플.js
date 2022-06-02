function solution(s) {
  const sets = s
    .slice(2, -2)
    .split('},{')
    .map((items) => items.split(',').map((item) => Number(item)))
    .sort((a, b) => a.length - b.length);

  let answer = [];
  for (const set of sets) {
    answer.push(...set.filter((x) => !answer.includes(x)));
  }
  return answer;
}

const input = [
  '{{2},{2,1},{2,1,3},{2,1,3,4}}',
  '{{1,2,3},{2,1},{1,2,4,3},{2}}',
  '{{20,111},{111}}',
  '{{123}}',
  '{{4,2,3},{3},{2,3,4,1},{2,3}}',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
