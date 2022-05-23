function Priority(op) {
  switch (op) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
  }
}

function solution(S) {
  let result = '';
  let stack = [];
  let op = '';
  let temp = '';

  S = S.split(' ');
  console.log(S);

  for (let i = 0; i < S.length; i++) {
    op = S[i];

    switch (op) {
      case '(':
        stack.push(op);
        break;
      case ')':
        while (stack.length > 0) {
          temp = stack.pop();
          if (temp == '(') {
            break;
          }
          result += ' ' + temp;
        }
      case '+':
      case '-':
      case '*':
      case '/':
        while (
          stack.length != 0 &&
          Priority(op) <= Priority(stack[stack.length - 1])
        ) {
          temp = stack.pop();
          result += ' ' + temp;
        }
        stack.push(op);
        break;
      default:
        if (result == '') {
          result += op;
        } else {
          result += ' ' + op;
        }
        break;
    }
  }

  while (stack.length > 0) {
    result += ' ' + stack.pop();
  }

  return result;
}

const input = [
  '1 + 2 * 3 * ( 2 + 3 )',

  '1 + 2 * 3 * ( 2 + 3 * 6 )',

  '1 + 2 * 3 * ( 2 * 3 + 6 )',

  '1 * 2 + 3 * 4',

  '1 * 200 + 30 * 4',
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i])}`);
}
