/**
 * @param l {number[]}
 * @return {number}
 */
function solution(l) {
  return calcMaxArea(l, 0, l.length - 1);
}

const calcMaxArea = function (l, left, right) {
  // 기저사례 : 나무판자가 하나인 경우
  if (left === right) return l[left];

  // 중간 지점 구한다.
  const mid = Math.floor((left + right) / 2);

  // 중간지점을 기준으로 좌/우의 최대 넓이를 구한다
  const leftMaxArea = calcMaxArea(l, left, mid);
  const rightMaxArea = calcMaxArea(l, mid + 1, right);

  let low = mid;
  let high = mid + 1;
  let curMinLength = Math.min(l[low], l[high]);
  let curMaxArea = curMinLength * 2;

  // 좌/우로 한칸씩 이동하며 최대 넓이를 구한다.
  while (left < low || high < right) {
    // 나무판자의 길이가 긴 방향으로 한칸씩 이동한다.
    if ((left < low) && ((high === right) || (l[low - 1] > l[high + 1]))) {
      low--;
      curMinLength = Math.min(curMinLength, l[low]);
    } else {
      high++;
      curMinLength = Math.min(curMinLength, l[high]);
    }

    const curWidth = high - low + 1;
    curMaxArea = Math.max(curMaxArea, curMinLength * curWidth);
  }

  // 각 넓이중 최대 넓이를 반환한다.
  return Math.max(leftMaxArea, rightMaxArea, curMaxArea);
};

solution
