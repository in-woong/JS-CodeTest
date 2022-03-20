function answer(nums) {
  let result = [];
  const answer = new Set(nums);
  result = [...answer];
  result.sort((a, b) => b - a).splice(2);

  return result;
}

let input = [
  [11, 5, 18, -2, -3, 6, 4, 18, 10, 9],
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
