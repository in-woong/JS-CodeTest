// [문제 설명]
//  숫자를 뒤집어 주세요.
//  만약에 `-587`이 들어오면 `-785`로 변경되어야 합니다.
//  결과의 절댓값이 `100,000`을 넘어가면 `0`을 출력해주세요.

// [제한 사항]
//  - 결과의 절댓값이 100,000을 넘어가면 0을 출력합니다.

// [입력 형식]
//  - num은 -1,000,000 이상 1,000,000 이하의 정수입니다.

// [출력 형식]
//  - leading zeros는 제거합니다.
//    (ex: 340이 입력되면 043이 아니라 43이 출력되어야 합니다.)

/**
 * @param num {number}
 * @return {number}
 */
function solution(num) {
  let reverseNumber = 0;
  const NEGATIVE = num < 0;

  if (NEGATIVE) num *= -1;

  for (let i = num; i; i = Math.trunc(i / 10)) {
    reverseNumber = reverseNumber * 10 + (i % 10);
  }

  if (100000 < reverseNumber) {
    return 0;
  }

  return NEGATIVE ? -reverseNumber : reverseNumber;
}

console.log(solution(345));
