function solution(nums) {
  const array = combination(nums, 3);
  let answer = 0;
  for (let i = 0; i < array.length; i += 1) {
    const sum = array[i].reduce((arr, cur) => arr + cur);
    for (let j = 2; j < sum; j += 1) {
      if (sum % j === 0) break;
      if (j === sum - 1) answer++;
    }
  }

  return answer;
}

function combination(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combins = combination(rest, n - 1);
    const combine = combins.map((v) => [fixed, ...v]);

    result.push(...combine);
  });
  return result;
}
