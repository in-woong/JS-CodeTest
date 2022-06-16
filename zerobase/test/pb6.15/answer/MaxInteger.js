// [문제 설명]
//  n개의 정수 배열 arr가 있습니다. 배열에서 가장 큰 정수를 반환하는 함수, solution을 완성해주세요.

//  예를 들어, arr [10, 1, 5]가 있을 때, 가장 큰 숫자는 10이고,
//  arr [] 가 있을 때, 결과는 -1 입니다.

// [제한 사항]
//  - 가장 큰 정수를 구할 수 없는 경우 -1을 반환합니다.

// [입력 형식]
//  - arr는 길이가 1 이상 100 이하의 배열입니다.
//  - arr의 요소는 1 이상 100_000 이하의 정수로 구성되어 있습니다.

// [출력 형식]
//  - 배열에서 가장 큰 정수를 반환합니다.

function solution(arr) {
  if (arr.length === 0) return -1;

  const MIN_VALUE = 1;
  let curMax = MIN_VALUE;
  arr.forEach((num) => (curMax = curMax < num ? num : curMax));
  return curMax;
}

export default solution;
