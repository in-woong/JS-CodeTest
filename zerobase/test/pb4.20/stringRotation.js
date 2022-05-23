function solution(S1, S2) {
  S1 = S1 + S1;
  if (S1.includes(S2) == true) {
    return 1;
  } else {
    return 0;
  }
}

const input = [
  ['HelloWorld', 'WorldHello'],
  ['HelloWorld', 'elloWorldH'],
  ['HelloWorld', 'HelloWrold'],
  ['HelloWorld', 'HelloWorld'],
  ['HelloWorld', 'elloWorldH'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
