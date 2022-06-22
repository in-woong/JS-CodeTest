function solution(plans) {
  let count = 0;
  return ascend(plans, count);
}

function ascend(plans, count) {
  console.log(plans);
  let temp = 0;

  for (let i = 0; i < plans.length; i++) {
    if (temp >= plans[i]) {
      temp = Math.floor(temp / 2);
      const element = plans.splice(i - 1, 1, temp);
      if (element[0] == 0) return -1;
      return ascend(plans, count + 1);
    }
    temp = plans[i];
  }
  return count;
}

const input = [
  [5, 4, 3, 2, 1],
  [6, 12, 10],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
