function solution(array, p) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i].slice(0, p.length)==p)count++;
  }
  return count;
}
const input = [[['apple', 'banana', 'kakao', 'naver', 'apache'], 'ap']];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
