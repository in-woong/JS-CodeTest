function solution(commands) {
  const array = Array.from({ length: 50 }, () =>
    new Array(50).fill(['EMPTY', 'EMPTY'])
  );
  const coms = commands.map((command) => command.split(' '));
  const answer = [];
  const merged = new Map();
  let num = 0;
  //set.(i, [값,[value위치]])

  for (const com of coms) {
    const order = com[0];
    switch (order) {
      case 'UPDATE':
        if (0 <= com[1] && com[1] <= 50) {
          // console.log("일반 update")
          generalUpdateElement(array, merged, com[1], com[2], com[3]);
        } else {
          updateElement(array, merged, com[1], com[2]);
        }
        break;
      case 'MERGE':
        mergeElement(array, merged, num, com[1], com[2], com[3], com[4]);
        break;
      case 'UNMERGE':
        unmergeElement(array, merged, com[1], com[2]);
        break;
      case 'PRINT':
        printElement(answer, array, merged, com[1], com[2]);
        break;
    }
  }

  return answer;
}

function printElement(answer, array, merged, r1, c1) {
  // console.log("print", array[r1][c1])
  if (array[r1][c1][0] == 'MERGED') {
    answer.push(merged.get(array[r1][c1][1])[0]);
  } else {
    answer.push(array[r1][c1][0]);
  }
}

function unmergeElement(array, merged, r1, c1) {
  // console.log("unmerge")
  if (array[r1][c1][0] !== 'MERGED') return;
  const mergedNum = array[r1][c1][1];
  const value = merged.get(mergedNum)[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j][1] == mergedNum) {
        array[i][j] = ['EMPTY', 'EMPTY'];
      }
    }
  }
  array[r1][c1] = [value, 'EMPTY'];
  merged.delete(mergedNum);
}

function mergeElement(array, merged, num, r1, c1, r2, c2) {
  // console.log("merge")
  if (array[r1][c1][0] == 'MERGED' && array[r2][c2][0] == 'MERGED') {
    // console.log("1")
    array[r2][c2][1] = array[r1][c1][1];
  }
  //r1,c1이 이미 병합되었을때,
  else if (array[r1][c1][0] == 'MERGED') {
    // console.log("2")
    array[r2][c2] = ['MERGED', array[r1][c1][1]];
    // merged.set(array[r1][c1][1], [...merged.get(array[r1][c1][1])[1], [r2,c2]])
  }
  //r2,c2가 이미 병합되었을때
  else if (array[r1][c1][0] == 'MERGED') {
    // console.log("3")
    array[r1][c1] = ['MERGED', array[r2][c2][1]];
    merged.set(array[r2][c2][1], [merged.get(array[r2][c2])[0], [r1, c1]]);
  }
  //r1,c1, r2,c2 모두 병합되지 않았을때
  else {
    // console.log("4", num)
    merged.set(num, [array[r1][c1][0], [r1, c1]]);
    array[r1][c1] = ['MERGED', num];
    array[r2][c2] = ['MERGED', num];
    num++;
  }
}

function generalUpdateElement(array, merged, r1, c1, value) {
  if (array[r1][c1][0] == 'MERGED') {
    const mergedNum = array[r1][c1][1];
    merged.set(mergedNum, [value, merged.get(mergedNum)[1]]);
  } else {
    array[r1][c1] = [value, 'EMPTY'];
  }
}

function updateElement(array, merged, value1, value2) {
  // console.log("update")
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j][0] == value1) array[i][j] = [value2, 'EMPTY'];
      if (array[i][j][0] == 'MERGED') {
        const mergedNum = array[i][j][1];
        if (merged.get(mergedNum)[0] == value1) {
          merged.set(mergedNum, [value1, merged.get(mergedNum)[1][1]]);
        }
      }
    }
  }
}
