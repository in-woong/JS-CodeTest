if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length === 0;
  };
}
function answer(str) {
  let stack = [];
  let count = 0;

  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')') {
      if (stack.isEmpty()) return [];
      result.push([stack.pop(), i]);
    }
  }

  if (!stack.isEmpty()) return [];

  return result;
}

let input = [
  '(a+b)',
  '(a*(b+c)+d)',
  '(a*(b+c)+d+(e)',
  '(a*(b+c)+d)+e)',
  '(a*(b+c)+d)+(e*(f+g))',
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
