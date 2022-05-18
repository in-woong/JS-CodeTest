function solution(string) {
  console.log(string);
  return string.split(' ').length;
}

const input = ['Happy new year', 'Hello world', 'Nice to meet you'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
