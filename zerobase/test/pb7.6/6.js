//1,4,5
function solution(stats, k) {
  const map = new Map();
  for (let i = 0; i < stats.length; i++) {
    if (map.get(stats[i])) {
      map.set(stats[i], map.get(stats[i]) + 1);
    } else {
      map.set(stats[i], 1);
    }
  }
  const keys = [...map.keys()];
  const values = [...map.values()];
  let bool = false;
  let answer = [];
  let max = 0;
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    //지금도 만족, 전에도 만족
    if (values[i] >= k && bool == true) {
      count++;
      answer.push(keys[i]);
      //지금은 만족, 이전에는 불만족
    } else if (values[i] >= k && bool == false) {
      count++;
      answer = [keys[i]];
      bool = true;
      //지금은 불만족, 이전에는 만족
    } else if (values[i] < k && bool == true) {
      bool = false;
      let sum;
      if (answer.length > 1) {
        sum = answer[0] + answer[answer.length - 1];
      } else {
        sum = answer[0];
      }
      max = max < sum ? sum : max;
      //지금은 불만족, 이전에도 불만족
    } else if (values[i] < k && bool == false) {
    }
  }
  if (bool) {
    let sum;
    if (answer.length > 1) {
      sum = answer[0] + answer[answer.length - 1];
    } else {
      sum = answer[0] * 2;
    }
    max = max < sum ? sum : max;
  }
  if (count == 0) return -1;
  return max;
}

const input = [
  [[6, 3, 5, 2, 1], 1],
  [[4, 3, 4, 3, 3, 4], 4],
  [[1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], 2],
  [
    [
      15, 23, 28, 22, 41, 14, 13, 17, 44, 19, 26, 20, 21, 16, 24, 25, 12, 18,
      27,
    ],
    1,
  ],
  [[34], 1],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
