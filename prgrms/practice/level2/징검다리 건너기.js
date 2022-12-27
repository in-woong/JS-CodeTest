function solution(stones, k) {
  return binarySearch(0, 200_000_000, stones, k);
}

function getMiddle(min, max) {
  return parseInt((min + max) / 2);
}

function binarySearch(min, max, arr, k) {
  while (min <= max) {
    const middle = getMiddle(min, max);
    const result = arr.map((el) => el - middle);
    let count = 0;
    for (const el of result) {
      if (el <= 0) {
        count += 1;
      } else {
        count = 0;
      }
      if (count >= k) break;
    }
    if (count >= k) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }
  return min;
}
