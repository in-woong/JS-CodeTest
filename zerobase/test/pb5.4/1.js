function solution(s) {
  const string = s.split('');

  const set = new Set(string);

  return set.size;
}

const input = ['google', 'members'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
