function solution(p, s) {
  let matchedCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (isMatched(p, s[i])) {
      console.log('answer', p, s[i]);
      matchedCount++;
    }
  }
  return matchedCount;
}

function isMatched(stand, text) {
  const sLength = stand.length;
  const tLength = text.length;

  const dp = Array.from({ length: sLength + 1 }, () =>
    Array.from({ length: tLength + 1 }, () => -1)
  );
  return recursiveIsMatched(stand, 0, text, 0, dp);
}

function recursiveIsMatched(stand, sIndex, text, tIndex, dp) {
  if (sIndex === stand.length) return tIndex === text.length;
  if (dp[sIndex][tIndex] !== -1) return dp[sIndex][tIndex];
  const pattern = stand.substr(sIndex, 1);
  const string = text.substr(tIndex, 1);
  //1. 패턴이 문자일경우
  if (pattern === string) {
    if (recursiveIsMatched(stand, sIndex + 1, text, tIndex + 1, dp)) {
      dp[sIndex][tIndex] = 1;
      return true;
    }
  }
  //2. 패턴이 ? 일 경우
  if (pattern == '?') {
    if (recursiveIsMatched(stand, sIndex + 1, text, tIndex + 1, dp)) {
      dp[sIndex][tIndex] = 1;
      return true;
    }
  }

  //3. 패턴이 *일 경우
  if (pattern == '*') {
    //*에 매치되는 것이 없을때
    if (
      sIndex < stand.length &&
      recursiveIsMatched(stand, sIndex + 1, text, tIndex, dp)
    ) {
      dp[sIndex][tIndex] = 1;
      return true;
    }
    //*에 매치되는 것이 있을때
    if (
      tIndex < text.length &&
      recursiveIsMatched(stand, sIndex, text, tIndex + 1, dp)
    ) {
      dp[sIndex][tIndex] = 1;
      return true;
    }
  }
  dp[sIndex][tIndex] = 0;
  return false;
}

const input = [
  ['faster', ['fastcampus', 'fast', 'faster', 'notfast', 'notfaster']],
  [
    '*?as?*',
    ['ast', 'fastcampus', 'fast', 'faster', 'notfast', 'nofas', 'notfaster'],
  ],
  ['xy?', ['axy', 'axyz', 'xy', 'xyz', 'xyi']],
  ['?', ['a', 'bc', 'def', 'alpha']],
  ['*', ['a', 'bc', 'def', 'beta']],
  //   [
  //     '********************* **************fast',
  //     ['fastcampus', 'fast', 'faster', 'notfast', 'notfaster'],
  //   ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
