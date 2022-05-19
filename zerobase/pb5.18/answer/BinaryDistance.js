/**
 * @param n {number}
 * @return {number}
 */
function solution(n) {
  let maxDistance = 0;
  let curDistance = -1;

  // n이 0 이하가 될 때까지 반복한다.
  while (n > 0) {
    console.log(n, maxDistance, curDistance, n & 1);
    // n의 이진 표현중 최초 1이 나올때까지 거리를 재지 않는다.
    if (curDistance === -1) {
      // n의 이진 표현중 가장 우측값이 1이 나오면 초기화
      if ((n & 1) === 1) curDistance = 0;
    } else {
      // 거리를 1 증가 한다.
      curDistance++;

      // 인접한 1까지의 거리를 계산한다.
      if ((n & 1) === 1) {
        maxDistance = Math.max(maxDistance, curDistance);
        curDistance = 0;
      }
    }

    // n을 우측으로 쉬프트한다.
    n >>= 1;
  }

  return maxDistance;
}
const input = [11, 513, 65537, 524289, 8388609, 67108865];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
