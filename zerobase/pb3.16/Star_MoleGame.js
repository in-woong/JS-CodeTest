// [문제 설명]
//  3 x 3개의 격자 형태의 두더지 게임판이 있습니다. 두더지들은 들어가거나 나와 있는데, 이 두더지들을 모두 나오도록 바꾸는 게임입니다.
//  두더지를 조작하는 유일한 방법은 10개의 스위치를 조작하는 것으로, 각 스위치는 1개 이상의 두더지에 연결되어 있습니다.
//  한 스위치를 누를 때마다, 해당 스위치와 연결된 나와 있던 두더지는 들어가고, 들어가 있던 두더지는 나옵니다.
//  이때, 모든 두더지를 나오게 하려면 최소한 스위치를 몇 번이나 눌러야 할지를 출력하는 함수, solution을 완성해주세요.

//  예를 들어, 게임판의 9마리 두더지 상태 state로 [ 1, 0, 1, 0, 0, 1, 1, 1, 1 ]가 있고, 10개의 스위치에 연결된 두더지 번호 linkNums가 [ [1], [7], [8], [4, 7], [1, 3], [3, 4, 8], [0], [6], [2], [1, 4] ] 라고 가정할 때,
//  스위치에 연결된 두더지 정보는 다음과 같습니다.
//  > 스위치 0에 연결된 두더지 번호 1
//  > 스위치 1에 연결된 두더지 번호 7
//  > 스위치 2에 연결된 두더지 번호 8
//  > 스위치 3에 연결된 두더지 번호 4, 7
//  > 스위치 4에 연결된 두더지 번호 1, 3
//  > 스위치 5에 연결된 두더지 번호 3, 4, 8
//  > 스위치 6에 연결된 두더지 번호 0
//  > 스위치 7에 연결된 두더지 번호 6
//  > 스위치 8에 연결된 두더지 번호 2
//  > 스위치 9에 연결된 두더지 번호 1, 4
//  이때, 모든 두더지를 나오게 하려면 최소한 3번의 스위치(스위치 0, 2, 5)를 눌러야 합니다.

// [제한 사항]
//  - 두더지의 상태는 0이면 들어가 있는 두더지, 1이면 나와 있는 두더지입니다.

// [입력 형식]
//  - 두더지 상태 state가 주어집니다.
//  - state는 0과 1로 이루어진 길이가 9인 배열입니다.
//  - 스위치에 연결된 두더지 번호 linkNums가 주어집니다.
// - linkNums는 각 스위치에 연결된 두더지 번호로 이루어진 길이가 10인 배열입니다.

// [출력 형식]
//  - 모든 두더지를 나오게 하도록 스위치를 눌러야 하는 최소한의 수를 출력합니다.
//  - 모든 두더지를 나오게 할 수 없으면 -1을 출력합니다.

function solution(state, linkNums) {
  const linked = generateLinked(linkNums);
  const minClickCount = countMinClickToAllout(state, linked, 0);

  return minClickCount === INF ? -1 : minClickCount;
}

function generateLinked(linkNums) {
  const MOLE_SIZE = 9;
  const linked = [];

  for (let i = 0; i < linkNums.length; i++) {
    linked[i] = new Array(MOLE_SIZE).fill(0);

    for (let j = 0; j < linkNums[i].length; j++) {
      const linkedMoleIndex = linkNums[i][j];
      linked[i][linkedMoleIndex] = 1;
    }
  }
  return linked;
}

function countMinClickToAllout(state, linked, switchIndex) {
  if (switchIndex >= linked.length) return isAllOut(state) ? 0 : INF;

  let clickCount = INF;
  for (let i = 0; i < 2; i++) {
    clickCount = Math.min(
      clickCount,
      i + countMinClickToAllout(state, linked, switchIndex + 1)
    );
    clickSwitch(state, linked, switchIndex);
  }
  return clickCount;
}

function isAllOut(state) {
  return state.reduce((acc, cur) => acc && cur === 1, true);
}

function clickSwitch(state, linked, switchIndex) {
  for (let i = 0; i < linked[switchIndex].length; i++) {
    const isLinked = linked[switchIndex][i] === 1;
    if (isLinked) {
      state[i] = (state[i] + 1) % 2;
    }
  }
}

solution(
  [1, 0, 1, 0, 0, 1, 1, 1, 1],
  [[1], [7], [8], [4, 7], [1, 3], [3, 4, 8], [0], [6], [2], [1, 4]]
);
