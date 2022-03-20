//조합의 시간복잡도는 O(2**n)

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combins = combinations(rest, n - 1);
    const combine = combins.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}

console.log(combinations([1, 2, 3, 4, 5], 3));
