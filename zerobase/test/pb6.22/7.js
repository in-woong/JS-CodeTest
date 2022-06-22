//test 1 실패

function solution(stock) {
  let idx = [];
  const sortedArray = stock.slice().sort((a, b) => a - b);

  for (let i = 0; i < stock.length; i++) {
    if (sortedArray[i] !== stock[i]) {
      idx.push(i);
    }
  }
  console.log(idx, idx[-1]);
  if (idx.length == 2) return 1;

  const newArray = [
    ...stock.slice(0, idx[0]),
    ...stock.slice(idx[0], idx[idx.length - 1] + 1).sort((a, b) => a - b),
    ...stock.slice(idx[idx.length - 1] + 1),
  ];
  console.log(newArray);
  for (let i = 0; i < stock.length; i++) {
    if (sortedArray[i] !== newArray[i]) {
      return 0;
    }
  }
  return 1;
}

const input = [
  [4, 2],
  [1, 2, 5, 8, 9, 3, 4],
  [1, 2, 8, 4, 5, 9, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
