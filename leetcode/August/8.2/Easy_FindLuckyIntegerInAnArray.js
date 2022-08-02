/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  console.log(arr);
  const set = Array.from(new Set(arr)).sort((a, b) => b - a);
  for (let i = 0; i < set.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == set[i]) count++;
    }
    if (count == set[i]) return count;
  }

  return -1;
};
