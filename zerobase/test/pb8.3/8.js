function solution(live, commands) {
  const answer = [];
  for (let i = 0; i < commands.length; i++) {
    const [idx, value] = commands[i];
    live[idx - 1] = live[idx - 1] - value;
    answer.push(countGroup(live));
  }
  return answer;
}

function countGroup(live) {
  const temp = live.slice();
  let max = temp[0];
  let count = temp.length + 1;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] >= max) {
      count--;
    }
    temp[i] = temp[i] > max ? max : temp[i];
    max = temp[i];
  }
  return count;
}
