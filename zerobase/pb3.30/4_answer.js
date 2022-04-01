function compare(a, b) {
  let aValue = a == 0 ? a : a.toString(2).match(/1/gi).length;
  let bValue = b == 0 ? b : b.toString(2).match(/1/gi).length;

  if (aValue == bValue) {
    return a - b;
  } else {
    return aValue - bValue;
  }
}

function solution(A) {
  return A.sort(compare);
}

const input = [
  [1, 2, 3, 4],
  [6, 7, 11, 3],
  [5, 7, 15, 0],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
