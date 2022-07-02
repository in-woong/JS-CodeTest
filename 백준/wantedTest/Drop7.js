
// 시간 제한	메모리 제한
// 1 초	512 MB
// 문제
// Drop7은 7×7 크기의 격자에서 진행하는 싱글 플레이어 게임이다. 처음에는 격자가 비어있고, 플레이어는 매 턴마다 1 이상 7 이하의 정수 하나가 적힌 공을 받아 7개의 열 중 한 곳에 떨어뜨려야 한다. 떨어뜨린 공은 이미 배치되어 있는 공 바로 위에 도달하거나 바닥 바로 위에 도달할 때까지 아래로 이동한다.

// 가로 방향으로 연속해서 놓여있는 공들을 "가로 방향 그룹", 세로 방향으로 연속해서 놓여있는 공들을 "세로 방향 그룹"이라고 하자. 공을 떨어뜨릴 때마다 공들의 그룹이 바뀔 수 있는데, 만약 크기가 $x$인 그룹에 $x$가 적힌 공이 있다면 그 공은 없어진다. 조건을 만족하는 공은 모두 동시에 없어진다. 공이 없어지면 위에 있던 공들이 아래로 내려가며, 공이 없어지는 이벤트는 연쇄적으로 발생한다. 단, 크기가 n인 그룹은 크기가 n-1인 그룹을 포함하지 않는다. 즉 그룹의 가장 끝에 위치한 공은 격자의 테두리 또는 빈 공간과 인접한다.

// 현재 격자의 상태와 이번에 떨어뜨려야 하는 공의 번호가 주어졌을 때, 공을 한 번 떨어뜨려서 최대한 많이 공을 없애보자.

// 입력
// 첫째 줄부터 7개의 줄에 현재 격자의 상태가 주어진다. 공이 있는 칸은 공의 번호가 1부터 7까지의 숫자로 주어지며, 공이 없는 칸은 0으로 주어진다.

// 다음 줄에 떨어뜨릴 공의 번호가 주어진다.

// 게임 도중에 나타날 수 있는 상태만 입력으로 주어진다. 즉 격자의 첫 번째 줄은 모두 0이고, 공을 떨어뜨리기 전에 공이 없어지는 이벤트가 발생하지 않는 입력만 주어진다.

// 출력
// 공을 떨어뜨렸을 때 격자에 남아있을 수 있는 공의 개수의 최솟값을 출력한다.

// 예제 입력 1 
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 4 0 2 0
// 0 0 0 5 0 6 0
// 3 3 0 7 5 6 7
// 3
// 예제 출력 1 
// 0
// 3번째 열에 놓으면 된다.

// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 4 0 2 0
// 0 0 0 5 0 6 0
// 3 3 3 7 5 6 7

// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 2 0
// 0 0 0 4 0 6 0
// 3 3 3 5 5 6 0

// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 4 0 2 0
// 3 3 3 5 5 6 0

// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 4 0 0 0
// 3 3 3 5 5 0 0

// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 3 3 3 4 0 0 0

// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 3 3 3 0 0 0 0

// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0

const fs = require('fs');

const input = fs.readFileSync('./data').toString().split('\n');
const array = [];
for (let i = 0; i < input.length - 1; i++) {
  array.push(input[i].split(' ').map((v) => Number(v)));
}
const n = Number(input[input.length - 1]);

function solution(array, n) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i][n - 1] === 0) {
      array[i][n - 1] = n;
      break;
    }
  }
  //makeGroup

  let group = makeGroup(array);

  while (true) {
    [array, count] = canDelete(group, array);
    group = makeGroup(array);

    if (count == 0) break;
  }
  const answer = countArray(array);
  return answer;
  //삭제 될 것이 있는지 확인
  //makeGroup
}

function countArray(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] !== 0) count++;
    }
  }
  return count;
}

function canDelete(group, array) {
  let arr = array.slice();
  let count = 0;
  for (let i = 0; i < group.length; i++) {
    for (let j = 0; j < group[i].length; j++) {
      if (group[i][j][0] == group[i].length) {
        arr[group[i][j][1]][group[i][j][2]] = 0;
        count++;
      }
    }
  }

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1][i] == 0) {
        for (let k = j; k >= 0; k--) {
          arr[k + 1][i] = arr[k][i];
        }
        arr[0][i] = 0;
      }
    }
  }
  return [arr, count];
}

function makeGroup(array) {
  const group = [];
  for (let i = 0; i < array.length; i++) {
    let temp = [];
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] !== 0) {
        temp.push([array[i][j], i, j]);
      } else if (temp.length) {
        group.push(temp);
        temp = [];
      }
    }
    if (temp.length) {
      group.push(temp);
    }
  }

  for (let i = 0; i < array[0].length; i++) {
    let temp = [];
    for (let j = 0; j < array.length; j++) {
      if (array[j][i] !== 0) {
        temp.push([array[j][i], i, j]);
      } else if (temp.length) {
        group.push(temp);
        temp = [];
      }
    }
    if (temp.length) {
      group.push(temp);
    }
  }
  return group;
}

console.log(solution(array, n));
