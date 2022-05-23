function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => a - b);
  console.log(people);
  while (people.length != 0) {
    let temp = people.pop();
    for (let i = people.length - 1; i >= 0; i--) {
      if (limit >= temp + people[i]) {
        people.splice(i, 1);
        break;
      }
    }
    answer++;
  }
  return answer;
}

const input = [
  [[45, 50, 51, 49, 90, 70], 100],
  [[45, 50, 90, 70], 100],
  [[80, 90, 70], 100],
  [[80, 90, 70], 100],
  [[10, 10, 10, 10, 90, 100], 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
