function solution(begin, target, words) {
  words.unshift(begin);
  const visited = Array.from({ length: words.length }, () => 0);
  const stack = [];
  stack.push(0);
  visited[0] = 1;

  while (stack.length !== 0) {
    const i = stack.pop();
    const element = words[i];
    visited[i] = 1;
    console.log(`${element}-`, visited);

    for (let n = 0; n < words.length; n++) {
      console.log(element, words[n], countSame(element, words[n]));
      if (
        countSame(element, words[n]) == element.length - 1 &&
        visited[n] == 0
      ) {
        stack.push(n);

        continue;
      }
      console.log(stack);
    }
  }
}

function countSame(word1, word2) {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] == word2[i]) count++;
  }
  return count;
}

const input = [
  ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']],
  ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1], input[i][2])}`);
}
