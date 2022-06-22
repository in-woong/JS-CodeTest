//test 5실패

function solution(N, X, arrived) {
  let count = 0;
  let late = 0;
  let answer;
  const nSplit = N.split(':');
  arrived = arrived.map((time) => time.split(':'));

  for (let i = 0; i < arrived.length; i++) {
    if (subTime(nSplit, arrived[i]) > 0) {
      count++;
      console.log(subTime(nSplit, arrived[i]));
      if (count >= X) {
        const lateTime = Number(subTime(nSplit, arrived[i]));
        answer = late < lateTime ? arrived[i] : answer;
        late = late < lateTime ? lateTime : late;
      }
    }
  }
  if (answer) return answer.join(':');
  return 'PASS';
}

function subTime(nSplit, arrived) {
  let hours = Number(arrived[0]) - Number(nSplit[0]);
  let mins = Number(arrived[1]) - Number(nSplit[1]);
  let answer = 60 * hours + mins;
  return answer;
}

const input = [
  ['13:05', 3, ['13:15', '13:05', '13:20']],
  ['09:00', 3, ['09:03', '09:04', '09:05']],
  ['12:20', 2, ['13:35', '13:30', '14:20', '12:10', '12:25']],
  ['00:00', 1, ['03:03', '05:05']],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1], input[i][2])}`);
}
