function solution(s) {
  let sArray = [];
  for (let i = 0; i < s.length; i++) {
    sArray = [...sArray, ...s[i].split(' ')];
  }

  const set = new Set(sArray);
  return set.size;
}
function solution(arr) {
  const set = new Set();
  arr.flatMap((s) => s.split(' ')).map((s) => set.add(s));

  return set.size;
}

const input = [
  ['no pain', 'no', 'gain'],
  ['Hello', 'world', 'Nice World'],
  ['We can give advice but we cannot give conduct'],
  ['Better late', 'than never'],
  ['Slow', 'and', 'steady', 'win the race'],
  ['Rome is', 'not built', 'in a day'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
