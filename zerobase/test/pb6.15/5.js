function solution(s) {
  const sArray = s.split(/([+-])/g);

  let count = 0;
  while (sArray.length !== 0) {
    const element = sArray.shift();

    if (element == '-') {
      const num = Number(sArray.shift());
      count -= num;
    } else if (element == '+') {
      const num = Number(sArray.shift());
      count += num;
    } else if (element == '') {
      continue;
    } else {
      count += Number(element);
    }
  }

  return count;
}
const input = ['-3+26-7', '', '3+26-7'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
