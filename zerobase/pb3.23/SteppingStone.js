// [문제 설명]
//  징검다리를 건너려고 합니다. 징검다리는 한 번에 1칸 혹은 2칸을 건널 수 있습니다.

//  예를 들어, 3개의 발판이 있다고 가정할 때, 징검다리를 건너는 모든 방법의 수 예시는 다음과 같습니다.
//  > 1 걸음 + 1 걸음 + 1 걸음
//  > 1 걸음 + 2 걸음
//  > 2 걸음 + 1 걸음

//  징검다리의 발판 수 n이 주어질 때, 징검다리를 건너는 모든 방법의 수를 구하는 함수, solution을 완성해주세요.


// [입력 형식]
//  - n은 1 이상 50 이하의 정수입니다.


// [출력 형식]
//  - n개의 징검다리를 건너는 모든 방법의 수를 출력합니다.


/**
 * @param n {number}
 * @return {number}
 */
function solution(n) {
  const fibonaccis = [];
  fibonaccis[0] = 1;
  fibonaccis[1] = 2;

  for (let i = 2; i < n; i++) {
    fibonaccis[i] = fibonaccis[i - 2] + fibonaccis[i - 1];
  }

  return fibonaccis[n - 1];
}

solution
