/**
 * @param n {number}
 * @param s {string}
 * @param t {number}
 * @return {string}
 */
function solution(n, s, t) {
  // 반복 주기
  const repeatDuration = n + s.length;

  // 반복되는 주기를 제외하고 남은 시간 계산
  const optimizeTime = t % repeatDuration;

  // 남은 시간이 흐른 후의 전광판 출력
  const text = '.'.repeat(n) + s + '.'.repeat(n - 1);
  console.log(text);
  return text.substr(optimizeTime, n);
}

const input = [
  [5, 'Snowball', 18],
  [10, '0', 91],
  [1, 'Billboard', 31],
  [3, 'Apple', 9],
  [7, '0123456789', 77],
  [20, 'AlGoRiThM0123', 249],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
