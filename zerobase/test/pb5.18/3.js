function solution(n, s, t) {
  let result = Array.from({ length: n }, () => '.');

  for (let i = 0; i < t; i++) {
    number = i % (s.length + n);
    if (number < s.length) {
      result.push(s[number]);
    } else {
      result.push('.');
    }
    result = result.slice(1);
    console.log(result, i);
  }
  return result.join('');
}

const input = [[5, 'Snowball', 15]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1], input[i][2])}`);
}
