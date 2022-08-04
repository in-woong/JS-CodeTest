/**
 * @param p {string}
 * @param s {string[]}
 * @return {number}
 */
function solution(p, s) {
  let matchedCount = 0;
  for (let i = 0; i < s.length; i++) {
    matchedCount += isMatched(p, s[i]) ? 1 : 0;
  }

  return matchedCount;
}

function isMatched(p, t) {
  const pSize = p.length;
  const tSize = t.length;
  const dp = Array.from(Array(pSize + 1), () => new Array(tSize + 1).fill(-1));

  return recursiveIsMatched(p, 0, t, 0, dp);
}

function recursiveIsMatched(p, pIndex, t, tIndex, dp) {
  // 기저사례
  if (pIndex === p.length) return tIndex === t.length;

  if (dp[pIndex][tIndex] !== -1) return dp[pIndex][tIndex];

  const pattern = p.substr(pIndex, 1);
  const text = t.substr(tIndex, 1);

  // 패턴과 텍스트가 일치하거나, "?" 패턴의 경우 다음 글자를 비교한다.
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

  // "*" 패턴의 경우
  // 한글자 이상 매칭되는 케이스로, 다음 텍스트와 비교하거나
  // 한글자도 매칭되지 않는 케이스로, 다음 패턴과 비교한다.
  if (pattern === '*') {
    if (
      recursiveIsMatched(p, pIndex + 1, t, tIndex, dp) ||
      (tIndex < t.length && recursiveIsMatched(p, pIndex, t, tIndex + 1, dp))
    ) {
      dp[pIndex][tIndex] = 1;
      return true;
    }
  }

  // 매칭되지 않은 경우
  dp[pIndex][tIndex] = 0;
  return false;
}

solution;
