function solution(distance, rocks, n) {
  let [left, right] = [1, distance];

  rocks.sort((a, b) => a - b);
  let maxMinDist = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let deleteNumber = 0;
    rocks.reduce((acc, cur) => {
      if (cur - acc < mid) {
        deleteNumber++;
        return acc;
      }
      return cur;
    }, 0);

    if (distance - rocks[rocks.length - 1] < mid) {
      deleteNumber++;
    }
    console.log(
      'delete',
      deleteNumber,
      'mid',
      mid,
      'left',
      left,
      'right',
      right
    );
    if (deleteNumber > n) {
      right = mid - 1;
    } else {
      if (maxMinDist < mid) maxMinDist = mid;
      console.log(maxMinDist);
      left = mid + 1;
    }
  }
  return maxMinDist;
}

const input = [
  [25, [2, 14, 11, 21, 17], 2],
  [25, [2, 14, 11, 21, 17, 24], 3],
  [16, [4, 8, 11], 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(...input[i])}`);
}
