function solution(n, build_frame) {
  // 기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 합니다.
  // 보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.
  // [x, y, a, b] = [가로 좌표, 세로 좌표, type, isInstall]
  // type: 0(기둥), 1(보)
  // isInstall: 0(삭제), 1(설치)

  // build_frame 원소를 차례로 검사하면서
  // 추가 가능하면 추가해주고, 삭제 가능하면 삭제해준다.

  const frames = [];
  build_frame.forEach((frame) => {
    const [x, y, type, isInstall] = frame;

    if (isInstall) {
      if (checkAdd(x, y, type, frames)) frames.push([x, y, type]);
    } else checkDelete(x, y, type, frames);
  });

  return frames.sort((a, b) =>
    a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]
  );
}

function checkAdd(x, y, type, frames) {
  if (type) {
    // 보인 경우
    // 1. frames 중에 보이면서 ny = y 이면서 nx가 x-1인게 있고, nx가 x+1인거 있으면 참
    // 2. frames 중에 기둥이면서 nx === x 이면서 ny === y-1인게 있으면 참
    // 3. frames 중에 기둥이면서 nx = x + 1, ny = y + -1 인게 있으면 참
    if (frames.find(([nx, ny, ntype]) => !ntype && nx === x && ny === y - 1))
      return true;
    if (
      frames.find(([nx, ny, ntype]) => !ntype && nx === x + 1 && ny === y - 1)
    )
      return true;
    if (
      frames.find(([nx, ny, ntype]) => ntype && ny === y && nx === x - 1) &&
      frames.find(([nx, ny, ntype]) => ntype && ny === y && nx === x + 1)
    )
      return true;
    return false;
  } else {
    // 기둥인 경우
    // 1. y === 0 이면 무조건 참
    // 2. 기둥이면서 x는 같고, ny = y-1 인게 있으면 참
    // 3. 보이면서 x, y 같은게 있으면 참
    // 4. 보이면서 nx = x - 1, ny = y인게 있으면 참
    if (y === 0) return true;
    if (frames.find(([nx, ny, ntype]) => !ntype && nx === x && ny === y - 1))
      return true;
    if (frames.find(([nx, ny, ntype]) => ntype && nx === x && ny === y))
      return true;
    if (frames.find(([nx, ny, ntype]) => ntype && nx === x - 1 && ny === y))
      return true;
    return false;
  }
}

function checkDelete(x, y, type, frames) {
  const copy = frames.slice();

  const delIdx = copy.findIndex(
    ([nx, ny, ntype]) => type === ntype && x === nx && y === ny
  );
  copy.splice(delIdx, 1);

  // 제거된 상태에서 프레임들이 조건을 모두 만족하는지 검사
  for (let frame of copy) {
    const [nx, ny, ntype] = frame;
    if (!checkAdd(nx, ny, ntype, copy)) return;
  }

  frames.splice(delIdx, 1);
}

function solution(n, build_frame) {
  //기둥을 설치 할때, 한칸 밑에 무언가 있어야한다.
  //보를 설치할때는 그 좌표 또는 한칸 오른 쪽에 무언가 있어야 한다.
  let answer = [];
  const column = [];
  //기둥
  const row = [];
  //보
  const changeString = (x, y) => {
    let answer = '';
    if (x < 10) answer += `0${x}`;
    else answer += String(x);
    if (y < 10) answer += `0${y}`;
    else answer += String(y);

    return answer;
  };
  const changeNumber = (string) => {
    let answerX;
    let answerY;
    if (string.length == 4) {
      answerX = Number(string.slice(0, 2));
      answerY = Number(string.slice(2, 4));
    } else {
      answerX = Number(string.slice(0, 1));
      answerY = Number(string.slice(1, 2));
    }
    return [answerX, answerY];
  };

  const checkColumn = (x, y) => {
    if (
      column.includes(changeString(x, y - 1)) ||
      column.includes(changeString(x + 1, y - 1)) ||
      row.includes(changeString(x - 1, y)) ||
      row.includes(changeString(x + 1, y))
    )
      return true;
    return false;
  };
  const checkRow = (x, y) => {
    if (
      column.includes(changeString(x, y - 1)) ||
      row.includes(changeString(x - 1, y)) ||
      y == 0
    )
      return true;
    return false;
  };

  for (let i = 0; i < build_frame.length; i++) {
    const [x, y, build_type, isInstall] = build_frame[i];
    if (isInstall) {
      //설치

      if (build_type) {
        //x,y에 보 설치
        //조건: 기둥에 x,y-1 또는 x+1, y-1이 있거나, 보에 x+1,y 또는 x-1,y가 있거나

        if (checkColumn(x, y)) {
          row.push(changeString(x, y));
        }
      } else {
        //기둥
        //조건: 보에 x-1,y 가 있거나, 기둥에 x,y-1이 있거나
        if (checkRow(x, y)) {
          column.push(changeString(x, y));
        }
      }
    } else {
      //삭제
      if (build_type) {
        //x,y에 보 삭제
        //조건: x-1,y의 보, x+1,y 의 보 x,y-1의 기둥 x+1,y-1의 기둥
        const idx = row.indexOf(changeString(x, y));
        row.splice(idx, 1);
        if (row.includes(changeString(x - 1, y))) {
          if (!checkRow(x - 1, y)) {
            row.push(changeString(x, y));
            continue;
          }
        }
        if (row.includes(changeString(x + 1, y))) {
          if (!checkRow(x + 1, y)) {
            row.push(changeString(x, y));
            continue;
          }
        }
        if (column.includes(changeString(x, y - 1))) {
          if (!checkColumn(x, y - 1)) {
            row.push(changeString(x, y));
            continue;
          }
        }
        if (column.includes(changeString(x + 1, y - 1))) {
          if (!checkColumn(x + 1, y - 1)) {
            row.push(changeString(x, y));
            continue;
          }
        }
      } else {
        //x,y에 기둥삭제
        //x,y+1에 걸려있는 보, x-1,y+1에 걸려있는보가 x,y의 기둥이 없어도 잘 살수 있는가?
        const idx = column.indexOf(changeString(x, y));
        column.splice(idx, 1);
        if (row.includes(changeString(x, y + 1))) {
          if (!checkRow(x, y + 1)) {
            column.push(changeString(x, y));
            continue;
          }
        }
        if (row.includes(changeString(x - 1, y + 1))) {
          if (!checkRow(x - 1, y + 1)) {
            column.push(changeString(x, y));
            continue;
          }
        }
        if (column.includes(changeString(x, y - 1))) {
          if (!checkColumn(x, y - 1)) {
            column.push(changeString(x, y));
            continue;
          }
        }
      }
    }
  }

  //값 출력
  for (let i = 0; i < column.length; i++) {
    const [x, y] = changeNumber(column[i]);
    answer.push([x, y, 0]);
  }

  for (let i = 0; i < row.length; i++) {
    const [x, y] = changeNumber(row[i]);
    answer.push([x, y, 1]);
  }

  answer.sort((a, b) =>
    a[0] == b[0] ? (a[1] == b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]
  );

  return answer;
}
