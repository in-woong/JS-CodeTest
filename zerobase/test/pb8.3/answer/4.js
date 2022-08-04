function solution(arr) {
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length - 3; i++) {
    if (isRectangleable(arr[i], arr[i + 1], arr[i + 2], arr[i + 3]))
      return arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3];
  }
  return 0;
}

function isRectangleable(longest, long, short, shortest) {
  return longest < long + short + shortest;
}
