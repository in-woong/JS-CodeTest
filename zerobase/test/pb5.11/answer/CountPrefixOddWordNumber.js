function solution(array, s) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    const prefix = array[i];
    if (prefix.length % 2 === 0) continue;
    if (s.indexOf(prefix) === 0) {
      result++;
    }
  }
  return result;
}
const input = [
  [['app', 'ap', 'pa', 'appl'], 'apple'],
  [['a', 'p', 'app', 'apples'], 'apple'],
  [[], 'google'],
  [['n', 'c', 'cn', 'ncn'], 'nc'],
  [['nodejs'], 'nodejs'],
  [['javascript'], 'java'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
