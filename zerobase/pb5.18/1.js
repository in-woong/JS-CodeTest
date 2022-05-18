function solution(s) {
  result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[s.length - 1 - i]);
  }
  return result.join('');
}

const input = ['apple'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
