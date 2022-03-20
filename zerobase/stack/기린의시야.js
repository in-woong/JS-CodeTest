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

function answer(giraffe) {
  let result = 0;
  let stack = [];
  giraffe.push(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < giraffe.length; i++) {
    while (!stack.isEmpty() && stack.peek()['h'] < giraffe[i]) {
      result += i - stack.pop()['i'] - 1;
    }

    stack.push({ h: giraffe[i], i: i });
  }

  //   for (let i = 0; i < giraffe.length; i++) {
  //     let count = 0;
  //     let now = giraffe[i];
  //     let gira_index = i + 1;
  //     let gira = giraffe[gira_index];

  //     while (now >= gira) {
  //       count++;
  //       gira = giraffe[++gira_index];
  //     }
  //     result.push(count);
  //   }

  return result;
}

let input = [
  [10, 3, 7, 4, 12, 2],
  [7, 4, 12, 1, 13, 11, 12, 6],
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
