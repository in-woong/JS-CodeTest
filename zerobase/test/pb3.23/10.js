function solution(arr, i) {
  const max = Math.max(...arr);
  let array = [1,2,3];
  for (let k = 0; k <= max, k++; ) {
    console.log(k);
    array.push(k);
  }
  const selectedNums = combinations(array, i);
  console.log(array);
  let answer = 0;
  selectedNums.forEach((num) => {
    for (let i = 0; i < arr.length; i++) {
      let count = Infinity;
      for (let j = 0; j < num.length; j++) {
        count = count > (arr[i] - num[j]) ** 2 ? (arr[i] - num[j]) ** 2 : count;
      }
      answer += count;
    }
  });
  return answer;
}

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

console.log(solution([1, 2, 3, 5, 5, 5], 2));
