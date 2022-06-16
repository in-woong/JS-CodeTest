// [문제 설명]
//  코로나로 인해 거리 두기를 수행 중입니다.
//  사람들의 간격 lineUp은 사람을 나타내는 1과 비어있는 자리 0의 배열로 이루어져 있습니다.
//  코로나 심각도에 따라 거리두기 레벨 level이 주어질 때 방역수칙을 준수했는지 여부를 출력하는 함수, solution을 완성해주세요.

//  예를 들어, lineUp이 c이고, level이 2일 때, 결과는 true입니다.
//  > 첫 번째 사람 (index=0)과 두 번째 사람 (index=4)은 거리가 3만큼 떨어져 있으므로 방역수칙을 준수했습니다.
//  > 두 번째 사람 (index=4)과 세 번째 사람 (index=7)은 거리가 2만큼 떨어져 있으므로 방역수칙을 준수했습니다.
//  > 결과 : 방역수칙을 준수했습니다.

// [제한 사항]
//  - 두 사람 사이의 거리 즉, lineUp의 두 개의 1 사이의 0의 수가 K일 때, K >= level이면 방역수칙 준수 중입니다.

// [입력 형식]
//  - lineUp은 길이가 1 이상 1,000 이하의 배열입니다.
//  - lineUp은 0과 1의 요소로 이루어져 있습니다.
//  - level은 1 이상 1,000 이하의 정수입니다.

// [출력 형식]
//  - 방역수칙 준수 여부를 출력합니다.

function solution(lineUp, level) {
  let distanceSoFar = 9999;
  for (let num of lineUp) {
    console.log(num);
    if (num === 1) {
      if (distanceSoFar < level) return false;
      distanceSoFar = 0;
    } else if (num === 0) {
      distanceSoFar++;
    }
  }
  return true;
}

const input = [
  [[1, 0, 0, 0, 1, 0, 0, 1], 2],
  [[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], 3],
  [[0, 1, 0, 0, 0, 1, 0, 0, 0, 1], 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
