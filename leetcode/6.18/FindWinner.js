var findTheWinner = function (n, k) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  let count = 0;
  while (array.length > 1) {
    count++;
    if (count !== k) {
      const element = array.shift();
      array.push(element);
    } else {
      const element = array.shift();
      count = 0;
    }
  }

  return array[0];
};

function solution(n, k) {
  let res = 0;
  for (let g = 1; g <= n; g++) {
    res = (res + k) % g;
  }
  return res + 1;
}

const input = [
  [5, 2],
  [6, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(...input[i])}`);
}
