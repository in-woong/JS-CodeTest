function solution(sentence, word) {
  if (word === '') return -1;

  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) return i;
  }
  return -1;
}

const input = [
  ['Hello every world', 'every'],
  ['i love eating burger', 'i'],
  ['My name is Dave', 'Dave'],
  ['Ut conque ante nec libero malesuda accumsan', 'acc'],
  ['', 'every'],
  ['', ''],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
