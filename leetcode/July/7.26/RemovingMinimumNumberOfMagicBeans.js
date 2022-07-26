/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  //제일 큰거 빼고 다 0으로 만들거나
  //하나를 선택해서 이것 보다 작으면 0으로 만든다

  let sum = beans.reduce((acc, cur) => acc + cur);
  const max = Math.max(...beans);
  let answer = sum - max;
  console.log(answer);

  for (let i = 0; i < beans.length; i++) {
    const standard = beans[i];
    let temp = 0;
    for (let j = 0; j < beans.length; j++) {
      if (beans[j] < standard) {
        temp += beans[j];
      } else {
        temp += beans[j] - standard;
      }
    }
    answer = temp < answer ? temp : answer;
  }
  return answer;
};

//Time Exceed

/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  //제일 큰거 빼고 다 0으로 만들거나
  //하나를 선택해서 이것 보다 작으면 0으로 만든다

  let sum = beans.reduce((acc, cur) => acc + cur);
  let N = beans.length;
  beans = beans.sort((a, b) => a - b);

  let ans = Infinity;

  for (let i = 0; i < beans.length; i++) {
    ans = Math.min(ans, sum - (N - i) * beans[i]);
  }
  return ans;
};
