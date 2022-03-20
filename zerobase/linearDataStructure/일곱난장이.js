function answer(dwarf) {
  let result = [];
  for (let member of combination(dwarf, 7)) {
    if (member.reduce((a, b) => a + b) == 100) {
      result = member;
    }
  }
  return result;
}

function combination(arr, n) {
  if (n === 1) {
    return arr.map((v) => [v]);
  }

  const result = [];
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combins = combination(rest, n - 1);
    const combine = combins.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

let input = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],
  [25, 23, 11, 2, 18, 3, 28, 6, 37],
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
