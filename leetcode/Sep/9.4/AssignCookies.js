/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  console.log(g, s);
  let res = 0;
  for (let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
    console.log(g[i], s[j]);
    if (g[i] <= s[j]) {
      res++;
    } else {
      i--;
    }
  }
  return res;
};
