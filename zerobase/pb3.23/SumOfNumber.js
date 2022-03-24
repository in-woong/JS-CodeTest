// [문제 설명]
//  숫자 n이 주어질 때, 0 이상 n 이하의 연속된 정수의 합이 n과 같은 경우의 수를 구하는 함수, solution을 완성해주세요.

//  예를 들어, n이 15로 주어질 경우, 연속된 정수의 합이 15와 같은 경우의 수는 다음과 같이 4입니다.
//  > 15
//  > 8 + 7
//  > 4 + 5 + 6
//  > 1 + 2 + 3 + 4 + 5


// [입력 형식]
//  - n은 1 이상 10,000 이하의 정수입니다.


// [출력 형식]
//  - 연속된 정수의 합이 n과 같은 경우의 수를 구합니다.

/**
 * @param n {number}
 * @return {number}
 */
function solution(n) {
  let ret = 0;

  // n부터 0까지 순회합니다.
  for (let i = n; i >= 0; i--) {
    let val = n;

    // n에서 빼기 1씩 하면서 0이 되면 결과에 1을 추가합니다.
    for (let j = 0; j <= n; j++) {
      val -= i - j;
      if (val <= 0) {
        if (val === 0) ret++;
        break;
      }
    }
  }

  return ret;
}

solution
