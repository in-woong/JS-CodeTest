// [문제 설명]
//  제곱근 n이 주어질 때 이를 정수로 출력하는 함수, solution을 완성해주세요.

//  예를 들어, n의 값이 4 일 때, 결과는 2입니다.

// [제한 사항]
//  - 제곱근 n이 무리수일 때 0을 반환합니다.

// [입력 형식]
//  - n은 1 이상 1,000,000 이하의 자연수입니다.

// [출력 형식]
//  - 제곱근 n을 정수로 출력합니다.

function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n < i * i) break;

    if (n === i * i) {
      result = i;
      break;
    }
  }

  return result;
}

export default solution;
