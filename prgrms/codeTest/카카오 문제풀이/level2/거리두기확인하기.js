const direction = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

function solution(places) {
  let answer = [];
  let placeArray = [];
  let array = [];
  //P가 거리를 count로 재고 count<=2까지만 이동,X가 있으면 이동하지 않음
  for (let i = 0; i < places.length; i++) {
    placeArray.push(places[i].split(''));
  }

  for (let i = 0; i < placeArray.length; i++) {
    for (let j = 0; j < placeArray.length; j++) {
      if (placeArray[i][j] == 'P') {
        array.push([i, j]);
      }
    }
  }

  while (array.length != 0) {
    const [y, x] = array.shift();
    const visited = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => false)
    );
    visited[y][x] = true;
    console.log('IN', y, x);
    let count = 0;
    let result = recursive(x, y, count + 1, placeArray, visited);
    console.log('result', result);
    if (result == false) {
      console.log('O');
      return 0;
    }
  }

  return 1;
}

function recursive(x, y, count, placeArray, visited) {
  if (count > 2) {
    console.log('more than two');
    return;
  }

  for (let i = 0; i < direction.length; i++) {
    const dirY = y + direction[i][0];
    const dirX = x + direction[i][1];

    if (dirY >= 0 && dirY < 5 && dirX >= 0 && dirX < 5) {
      if (visited[dirY][dirX] == true) return;
      visited[dirY][dirX] = true;
      if (placeArray[dirY][dirX] == 'P') {
        console.log('P', dirY, dirX, count);
        return false;
      } else if (placeArray[dirY][dirX] == 'O') {
        console.log('O', dirY, dirX, count);
        if (recursive(dirX, dirY, count + 1, placeArray, visited) == false) {
          return false;
        }
      } else {
        console.log('X', dirY, dirX, count);
        //"X"일 때
      }
    }
  }
}

const input = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
