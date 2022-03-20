// [문제 설명]
//  온라인으로 주문을 받고 있습니다. 주문 번호는 주문 순서대로 1부터 증가합니다.
//  일부 주문이 취소된 주문 내역이 주어질 경우, n번째 주문 취소된 주문 번호를 구하는 함수, solution을 완성해주세요.

//  예를 들어, 주문 내역 orders [2, 4, 5, 7]이 있고, 3번째 취소된 주문 번호는 6입니다.
//  > 1번째 취소 주문 번호는 1
//  > 2번째 취소 주문 번호는 3
//  > 3번째 취소 주문 번호는 6

// [입력 형식]
//  - orders는 길이가 1 이상 1,000 이하인 배열입니다.
//  - 주문 번호는 최대 1,000건까지 존재합니다.
//  - n은 1 이상 1,000 이하의 정수입니다.

// [출력 형식]
//  - n번째 취소된 주문 번호를 구합니다.

function solution(orders, n) {
  let missCount = 0;
  let num = 0;
  let i = 0;
  while (missCount !== n) {
    num++;
    if (orders[i] === num) {
      i++;
    } else {
      missCount++;
    }
  }
  return num;
}
//마지막 수보다 n이 클때를 생각하지 않아서 틀림
console.log(solution([2, 3, 6], 6));
