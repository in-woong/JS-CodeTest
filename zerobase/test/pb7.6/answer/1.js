function solution(money, cost) {
  let priceDict = {};
  for (let i in cost) {
    if (money - cost[i] in priceDict) {
      if (priceDict[money - cost[i]] > cost[i]) {
        return [cost[i], priceDict[money - cost[i]]];
      } else {
        return [priceDict[money - cost[i]], cost[i]];
      }
    } else {
      priceDict[cost[i]] = cost[i];
    }
  }
}
