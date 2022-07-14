function solution(lucky) {
  answer = [];

  for (let idx in lucky) {
    flag = 0;
    num = Array.from(String(lucky[idx]), Number);
    for (const c of num) {
      if (c != 1 && c != 7) {
        flag = 1;
      }
    }
    let half = num.length / 2;
    let lsum = (rsum = 0);
    for (let i = 0; i < half; i++) lsum += num[i];
    for (let i = half; i < num.length; i++) rsum += num[i];
    if (lsum != rsum) flag = 1;
    if (flag) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  }
  return answer;
}
const input = [
  [1234, 5678],
  [1234, 111111, 11, 44],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
