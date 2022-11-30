function solution(number) {
  let answer = 0;
  const array = combination(number, 3);

  for (let i = 0; i < array.length; i += 1) {
    const sum = array[i].reduce((arr, cur) => arr + cur);

    if (sum === 0) answer++;
  }
  return answer;
}

function combination(arr, n) {
  if (n == 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combins = combination(rest, n - 1);
    const combine = combins.map((v) => [fixed, ...v]);

    result.push(...combine);
  });
  return result;
}
