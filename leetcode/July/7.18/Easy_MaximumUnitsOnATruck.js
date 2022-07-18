var maximumUnits = function (boxTypes, truckSize) {
  const sortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < sortedBoxTypes.length; i++) {
    if (sum + sortedBoxTypes[i][0] < truckSize) {
      sum += sortedBoxTypes[i][0];
      answer += sortedBoxTypes[i][0] * sortedBoxTypes[i][1];
    } else {
      answer += (truckSize - sum) * sortedBoxTypes[i][1];
      return answer;
    }
  }
  return answer;
};
