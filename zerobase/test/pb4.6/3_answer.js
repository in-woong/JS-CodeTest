function solution(S) {
  console.log(S[0]);
  let stack = [];
  let map = new Map();

  map.set(')', '(');
  map.set('}', '{');
  map.set('>', '<');
  map.set(']', '[');

  for (let i = 0; i < S.length; i++) {
    if ('({<['.includes(S[i])) {
      stack.push(S[i]);
    } else if ('})>]'.includes(S[i])) {
      if (stack.length > 0) {
        let top = stack.pop();
        if (map.get(S[i]) !== top) {
          return 0;
        }
      } else {
        return 0;
      }
    }
  }
  if (stack.length == 0) {
    return 1;
  } else {
    return 0;
  }
}

const input = [
  '(()){[<>]}',

  '(()[<>]}',

  '(()){[<((()))>]}',

  '(()){[(<)>]}',

  '(()){[(<>]}',
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i])}`);
}
