function solution(usageArr, fee) {
  let totalUsage = usageArr.reduce((pre, cur) => pre + cur, 0);
  return totalUsage * fee;
}
