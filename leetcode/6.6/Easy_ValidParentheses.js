// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function solution(s) {
  const sArray = s.split('');
  const stack = [];
  const result = { a: 0, b: 0, c: 0 };
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] == '(') {
      stack.push('(');
    } else if (sArray[i] == '[') {
      stack.push('[');
    } else if (sArray[i] == '{') {
      stack.push('{');
    } else if (sArray[i] == ')') {
      const element = stack.pop();
      if (element !== '(') return false;
    } else if (sArray[i] == ']') {
      const element = stack.pop();
      if (element !== '[') return false;
    } else if (sArray[i] == '}') {
      const element = stack.pop();
      if (element !== '{') return false;
    } else {
      return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
}

const input = ['()', '()[]{}', '(]', '([)]'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
