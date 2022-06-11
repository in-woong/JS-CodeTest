function solution(a, b) {
  let str = '';
  let carry = 0;
  let aPath = a.length - 1;
  let bPath = b.length - 1;
  while (aPath >= 0 || bPath >= 0) {
    let aStr = a[aPath] ? Number(a[aPath]) : 0;
    let bStr = b[bPath] ? Number(b[bPath]) : 0;

    const sum = carry + aStr + bStr;
    carry = Math.floor(sum / 2);
    let dig = sum % 2;

    str = dig + str;

    aPath--;
    bPath--;
  }
  if (carry === 1) str = carry + str;
  return str;
}

const input = [
  ['11', '1'],
  ['1010', '1011'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
