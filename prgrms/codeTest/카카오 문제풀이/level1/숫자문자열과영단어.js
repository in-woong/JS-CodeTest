function solution(s) {
  const Num = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < Num.length; i++) {
    s = s.split(Num[i]).join(i);
  }

  return Number(s);
}

const input = ['one4seveneight', '23four5six7', '2three45sixseven', '123'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
