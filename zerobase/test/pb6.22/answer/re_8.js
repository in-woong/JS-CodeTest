// [문제 설명]
// 저희는 인증시스템을 구현하라는 역할을 부여받고, 개발 중에 있습니다.
// 도중에, 악성 가입유저들이 중복해서 가입하는 것을 방지하기 위하여 동일한 패턴을 가지고 있는 아이디를 하나로 묶어 한 명의 유저로 생각하기로 했습니다.
// 예를 들어 [‘a’, ‘b’, ‘ab’, ‘d’]가 주어졌을 경우, ‘a’라는 아이디와 ‘b’라는 아이디 그리고 ‘ab’라는 아이디가 있으면 ‘ab’와 ‘a’는 같은 아이디이고 ‘ab’와 ‘b’도 같은 아이디로 판단하는데,
// 그 이유는 ‘a’와 ‘ab’안에 같은 문자열이 존재하고, ‘b’와 ‘ab’안에 같은 문자열이 존재하기 때문에 3개의 아이디는 모두 같은 사람입니다.
// 또한, ‘a’와 ‘d’는 같은 사람이지 않고, ‘b’와 ‘d’, ‘ab’와 ‘d’도 마찬가지로 같은 사람이 아닙니다.
// 그러므로 독립적인 사람은 단 2명 존재합니다.
// 이렇듯 아이디의 배열이 주어질 때, 독립된 사람은 몇 명인지 저희는 판단하여 반환해야 합니다.

// [제한 사항]
// - 아이디 배열의 길이는 1 이상 1000이하입니다.
// - 아이디는 1이상 50이하의 문자열이며 공백일 수 없습니다.
// - 아이디는 중복된 값이 배열에 존재할 수 있습니다.

function solution(identity) {
  let visited = [];
  let v = new Array(26).fill(0);
  let counter = 0;

  function dfs(node) {
    if (v[node]) {
      return;
    }

    v[node] = 1;
    for (let i = 0; i < visited[node].length; i++) {
      let n = visited[visited[node][i]];
      n.forEach((x) => {
        if (v[x] === 0) {
          dfs(x);
        }
      });
    }
  }

  for (let i = 0; i < identity.length; i++) {
    for (let j = 0; j < identity[i].length; j++) {
      let x = identity[i][j].charCodeAt(0) - 'a'.charCodeAt(0);
      console.log(x, identity[i], identity[i][j]);
      if (visited[x]) {
        visited[x].push(26 + i);
      } else {
        visited[x] = [26 + i];
      }
      if (visited[26 + i]) {
        visited[26 + i].push(x);
      } else {
        visited[26 + i] = [x];
      }
      console.log(visited);
    }
  }

  for (let i = 0; i < 26; i++) {
    if (v[i] === 0 && visited[i]) {
      dfs(i);
      counter++;
    }
  }
  return counter;
}

const input = [
  //   ['yyyyyyyyyy', 'xxxxx', 'zz', 'zzzzzz', 'zzzzz'],
  ['ac', 'bc', 'ca'],
  //   [
  //     'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
  //     'xdxxdxxddxdxdxxdddxdddxxxddx',
  //     'pyfpffffyyfppyfffpypp',
  //     'zzzzzzzzzzzzzzz',
  //     'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
  //   ],
  //   [
  //     'fhnfkfkfk',
  //     'fhnfkfkfk',
  //     'fhnfkfkfk',
  //     'fhnfkfkfk',
  //     'fhnfkfkfk',
  //     'fhnfkfkfk',
  //     'fhnfkfkfk',
  //     'fhnfkfkfk',
  //   ],
  //   ['aaa', 'bbb', 'ccc', 'ddd', 'ab'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${console.log(solution(input[i]))}`);
}
