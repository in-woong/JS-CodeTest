function solution(p, s) {
  let matchedCount = 0;
  for (let i = 0; i < s.length; i++) {
    matchedCount += isMatched(p, s[i]) ? 1 : 0;
  }

  return matchedCount;
}
function isMatched(p, t) {
  // console.log('isMatched', p, t);
  const pSize = p.length;
  const tSize = t.length;
  console.log(pSize, tSize);
  const dp = Array.from(Array(pSize + 1), () => new Array(tSize + 1).fill(-1));
  return recursiveIsMatched(p, 0, t, 0, dp);
}

function recursiveIsMatched(p, pIndex, t, tIndex, dp) {
  // console.log('recur', p, pIndex, t, tIndex);
  //p의 길이만큼 돌았으면, t만큼도 돌았는지 확인
  if (pIndex === p.length) return tIndex === t.length;

  // if (dp[pIndex][tIndex] !== -1) return dp[pIndex][tIndex];

  //앞에 한글자씩 빼온다
  const pattern = p.substr(pIndex, 1);
  const text = t.substr(tIndex, 1);
  // console.log(pattern, text);
  //?이거나 일반문자
  if (
    pIndex < p.length &&
    tIndex < t.length &&
    (pattern === '?' || pattern === text)
  ) {
    if (recursiveIsMatched(p, pIndex + 1, t, tIndex + 1, dp)) {
      dp[pIndex][tIndex] = 1;
      return true;
    }
  }
  //*가 나왔을때
  if (pattern === '*') {
    if (
      recursiveIsMatched(p, pIndex + 1, t, tIndex, dp) ||
      (tIndex < t.length && recursiveIsMatched(p, pIndex, t, tIndex + 1, dp))
    ) {
      dp[pIndex][tIndex] = 1;
      return true;
    }
  }
  dp[pIndex][tIndex] = 0;
  return false;
}

const input = [
  ['fast', ['fastcampus', 'fast', 'faster', 'notfast', 'notfaster']],
  ['*?as?*', ['ast', 'fastcampus', 'fast', 'faster', 'notfast', 'notfaster']],
  ['xy?', ['axy', 'axyz', 'xy', 'xyz']],
  ['?', ['a', 'bc', 'def', 'alpha']],
  ['*', ['a', 'bc', 'def', 'beta']],
  [
    '********************* **************fast',
    ['fastcampus', 'fast', 'faster', 'notfast', 'notfaster'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
