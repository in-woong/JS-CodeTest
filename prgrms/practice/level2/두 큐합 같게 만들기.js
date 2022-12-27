function solution(queue1, queue2) {
  const queue = [...queue2, ...queue1, ...queue2, ...queue1];
  const sum = queue.reduce((acc, cur) => acc + cur, 0) / 4;
  let l = queue2.length;
  let r = queue2.length + queue1.length - 1;
  let tempSum = queue.slice(l, r + 1).reduce((acc, cur) => acc + cur, 0);
  let answer = 0;
  while (0 <= l && l < queue.length && 0 <= r && r < queue.length) {
    if (tempSum < sum) {
      r++;
      tempSum += queue[r];
    } else if (tempSum > sum) {
      tempSum -= queue[l];
      l++;
    } else return answer;
    answer += 1;
  }

  return -1;
}
