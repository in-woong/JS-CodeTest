//앞에서 부터 큰것만 계속 골라내면 된다.
//앞에서부터 작은 것을 뺄 수 있는 만큼 빼낸다.
function solution(number, k) {
  let count = 0;
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    const item = number[i];
    if (i == 0) {
      stack.push(item);
      continue;
    }

    while (stack[stack.length - 1] < item) {
      stack.pop();
      count++;
      if (count === k) return stack.join('') + number.slice(i);
      if (stack.length === 0) break;
    }
    stack.push(item);
  }
  return stack.join('').slice(0, number.length - k);
}
const input = [
  ['654321', 1],
  ['654321', 5],
  ['1924', 2],
  ['1231234', 3],
  ['4177252841', 4],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
