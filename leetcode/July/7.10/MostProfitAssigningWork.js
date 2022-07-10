var maxProfitAssignment = function (difficulty, profit, worker) {
  let sum = 0;
  for (let i = 0; i < worker.length; i++) {
    let ability = worker[i];
    let max = 0;
    for (let j = 0; j < difficulty.length; j++) {
      if (ability >= difficulty[j]) {
        max = max < profit[j] ? profit[j] : max;
      }
    }
    sum += max;
  }
  return sum;
};
