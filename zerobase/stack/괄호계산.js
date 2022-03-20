if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length === 0;
  };
}

function answer(str) {
  let result = 0;
  let stack = [];
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '(':
        temp *= 2;
        stack.push('(');
        break;
      case '[':
        temp *= 3;
        stack.push('[');
        break;
      case ')':
        if (stack.isEmpty() || stack.peek() !== '(') {
          return 0;
        }
        if (str[i - 1] == '(') {
          result += temp;
        }

        stack.pop();
        temp /= 2;
        break;
      case ']':
        if (stack.isEmpty() || stack.peek() !== '[') {
          return 0;
        }
        if (str[i - 1] == '[') {
          result += temp;
        }

        stack.pop();
        temp /= 3;
        break;
    }
  }
  if (!stack.isEmpty()) return stack;
  return result;
}

let input = ['(()[[]])', '[][]((])', '(()[[]])([])'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
