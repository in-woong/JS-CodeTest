function solution(distance, time) {
  const n = distance.length;
  const v = [];
  for (let i = 0; i < n; i++) {
    v.push(distance[i] / time[i]);
  }
  const max = Math.max(...v);
  let round = 0;
  let result = -1;
  while (round <= max) {
    let ours = round;
    let yours = count(v, round);
    if (round == max && ours >= yours) {
      result = ours - yours;
    }
    round++;
  }
  function count(v, round) {
    let n = 0;
    for (let i = 0; i < v.length; i++) {
      if (v[i] <= round) n++;
    }
    return n;
  }
  return result;
}
