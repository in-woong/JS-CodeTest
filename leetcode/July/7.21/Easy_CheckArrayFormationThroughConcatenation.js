/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  while (pieces.length) {
    const array = pieces.pop();
    const idx = arr.indexOf(array[0]);
    if (idx < 0) return false;

    if (diff(arr.slice(idx, idx + array.length), array)) return false;
  }
  return true;
};

function diff(first, second) {
  console.log(first, second);
  if (first.length !== second.length) return true;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) return true;
  }
  return false;
}

// Runtime: 233 ms, faster than 5.71% of JavaScript online submissions for Check Array Formation Through Concatenation.
// Memory Usage: 46.4 MB, less than 5.71% of JavaScript online submissions for Check Array Formation Through Concatenation.
