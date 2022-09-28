/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const g = grid.flatMap((el) => el);
  let answer = 0;
  g.forEach((el) => {
    if (el < 0) answer++;
  });

  return answer;
};
