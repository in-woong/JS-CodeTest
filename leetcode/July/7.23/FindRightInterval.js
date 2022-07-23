/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const answer = [];
  for (let i = 0; i < intervals.length; i++) {
    console.log(i);
    const element = findInterval(intervals[i], intervals);
    answer.push(element);
  }
  return answer;
};

function findInterval(interval, array) {
  let answer = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  let idx = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] >= interval[1]) {
      idx = answer[0] > array[i][0] ? i : idx;
      answer = answer[0] > array[i][0] ? array[i] : answer;
    }
  }

  return idx;
}
