function solution(sentence, discount) {
  const sArray = sentence.split(' ');
  return sArray
    .map((item) => {
      if (item == item.match(/^\$\d+/g)) {
        return `$${(
          Number(item.match(/\d+/g)) *
          ((100 - Number(discount)) / 100)
        ).toFixed(2)}`;
      } else {
        return item;
      }
    })
    .join(' ');
}

const input = [
  ['there are $1 $2 and 5$ candies in the shop', 50],
  ['1 2 $3 4 $5 $6 7 8$ $9 $10$', 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
