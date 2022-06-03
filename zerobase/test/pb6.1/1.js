function solution(l) {
  return calcMaxArea(l, 0, l.length - 1);
}

function calcMaxArea(l, left, right) {
  if (left == right) return l[left];

  const mid = Math.floor((left + right) / 2);

  const leftMaxArea = calcMaxArea(l, left, mid);
  const rightMaxArea = calcMaxArea(l, mid + 1, right);
  console.log(left, mid, right, leftMaxArea, rightMaxArea, '1');
  let low = mid;
  let high = mid + 1;
  let curMinLength = Math.min(l[low], l[high]);
  let curMaxArea = curMinLength * 2;

  while (left < low || high < right) {
    if (left < low && (high === right || l[low - 1] > l[high + 1])) {
      low--;
      curMinLength = Math.min(curMinLength, l[low]);
    } else {
      high++;
      curMinLength = Math.min(curMinLength, l[high]);
    }

    const curWidth = high - low + 1;
    curMaxArea = Math.max(curMaxArea, curMinLength * curWidth);
  }

  return Math.max(leftMaxArea, rightMaxArea, curMaxArea);
}

const input = [
  [1, 10, 10, 10, 5],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 100, 200, 300, 1, 200, 300, 400, 1],
  [1, 10, 1, 10, 1, 10, 1, 10],
  [10000, 1, 5, 10, 10000],
  [1, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
