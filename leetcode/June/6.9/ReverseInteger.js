function solution(x) {
  let isNegative = x < 0 ? true : false;
  const result = Number(Math.abs(x).toString().split('').reverse().join(''));
  if (isNegative) {
    if (result > Math.pow(2, 31)) {
      return 0;
    }
    return result * -1;
  } else {
    if (result > Math.pow(2, 31) - 1) {
      return 0;
    }
    return result;
  }
}

const input = [123, -123, 120];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
