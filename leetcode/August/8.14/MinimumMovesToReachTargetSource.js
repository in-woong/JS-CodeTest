/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  let count = 0;
  while (target > 1) {
    if (maxDoubles == 0) {
      return count + target - 1;
    }
    count++;
    if (target % 2 == 0 && maxDoubles > 0) {
      target = target / 2;
      maxDoubles--;
    } else {
      target--;
    }
  }
  return count;
};
