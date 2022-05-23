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
