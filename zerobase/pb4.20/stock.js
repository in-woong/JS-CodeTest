function solution(A) {
  const buyPrice = Math.min(...A.slice(0, -1));
  const buyIndex = Array(...A).indexOf(buyPrice);
  const sellingPrice = Math.max(...A.slice(buyIndex));
  console.log(buyPrice, sellingPrice);
  return sellingPrice - buyPrice;
}

const input = [
  [100000, 99000, 99000, 98000, 97000],
  [100000, 99000, 99000, 98000, 97000, 110000],
  [10000, 50000, 70000, 30000, 60000, 110000],
  [100, 50, 150, 100, 200],
  [10000, 10000, 10000, 10000],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
