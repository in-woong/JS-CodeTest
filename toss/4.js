function solution(paths) {
  // "/로 시작하는 경우"
  // ".을 나타내는 경우"
  // "..을 나타내는 경우"
  //" ...을 나타내는 경우"
  const result = [];
  paths = paths.map((path) => path.split('/'));
  for (let i = 0; i < paths.length; i += 1) {
    setResult(paths[i], result);
    console.log('중간결과', result);
  }

  console.log('result', result.join('/'));
  return '/' + result.join('/');
}

function setResult(path, result) {
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] === '.') {
    } else if (path[i] === '..') {
      result.pop();
    } else if (path[i] === '...') {
      result.pop();
      result.pop();
    } else if (path[i] === '') {
    } else {
      result.push(path[i]);
    }
  }
}

const test = [
  ['/foo', 'bar', 'bax/asdf', 'quux', '..'],
  ['/foo', 'bar', 'baz/./asdf'],
  ['/foo', 'bar', 'baz', '...', '/asdf'],
];

for (let i = 0; i < test.length; i += 1) {
  console.log(`${i + 1} ${solution(test[i])}`);
}
