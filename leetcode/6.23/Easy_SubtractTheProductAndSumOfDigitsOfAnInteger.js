function solution(n) {
  const array = n
    .toString()
    .split('')
    .map((item) => Number(item));
  let sum = 0;
  let product = 1;
  array.forEach((num) => {
    sum += num;
    product = product * num;
  });
  return product - sum;
}

const input = [234, 4421];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
