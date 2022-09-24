function solution(cap, n, deliveries, pickups) {
  //갈때 먼집부터 짐을최대한 들고가고
  //올때 짐을 최대한들고 와야한다.
  //배달과 수거는 따로다
  //갈때 배달
  // 올때 수거
  const d = deliveries.length;
  const p = pickups.length;

  //배달에서 가장 먼곳을 구한다.
  let answer = 0;
  while (!check(deliveries, pickups)) {
    let dSum = 0;
    let dFar = 0;
    let pSum = 0;
    let pFar = 0;
    for (let i = d - 1; i >= 0; i--) {
      if (deliveries[i] && dFar == 0) dFar = i;
      if (deliveries[i] <= cap - dSum) {
        dSum += deliveries[i];
        deliveries[i] = 0;
      }
    }
    //최대한 채울 수 있는 만큼을 채운다.
    //수거할 때 가장 먼 곳을 구한다.
    for (let i = p - 1; i >= 0; i--) {
      if (pickups[i] && dFar == 0) pFar = i;
      if (pickups[i] <= cap - pSum) {
        pSum += pickups[i];
        pickups[i] = 0;
      }
    }
    answer += (Math.max(dFar, pFar) + 1) * 2;
  }
  return answer;

  // 최대한 수거할 수 있을 만큼 수거한다
  return 5;
  // 배달과 수거 중 먼 거리를 총 거리에 더한다.
}
function check(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== 0) return false;
  }
  for (let i = 0; i < arrayTwo.length; i++) {
    if (arrayTwo[i] !== 0) return false;
  }
  return true;
}
