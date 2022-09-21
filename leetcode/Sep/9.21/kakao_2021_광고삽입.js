function solution(play_time, adv_time, logs) {
  //누적합을 이용해서 풀어보자
  const pTime = calculateTime(play_time);
  const aTime = calculateTime(adv_time);

  const time = new Array(pTime).fill(0);

  logs.forEach((log) => {
    const [s, e] = log.split('-');
    const startTime = calculateTime(s);
    const endTime = calculateTime(e);
    time[startTime]++;
    time[endTime]--;
  });

  for (let i = 1; i <= pTime; i++) {
    time[i] += time[i - 1];
  }

  for (let i = 1; i <= pTime; i++) {
    time[i] += time[i - 1];
  }

  let sum = time[aTime - 1];
  let idx = 0;

  for (let i = 0; i < pTime - aTime + 1; i++) {
    if (sum < time[i + aTime - 1] - time[i - 1]) {
      sum = time[i + aTime - 1] - time[i - 1];
      idx = i;
    }
  }

  return formatterTime(idx);
}
function calculateTime(time) {
  const HHMMSS = time.split(':');
  return Number(HHMMSS[0] * 3600) + Number(HHMMSS[1] * 60) + Number(HHMMSS[2]);
}

function formatterTime(time) {
  let HH = (time / 3600) >> 0;
  let MM = ((time / 60) >> 0) % 60;
  let SS = time % 60;

  HH = HH > 9 ? HH : '0' + HH;
  MM = MM > 9 ? MM : '0' + MM;
  SS = SS > 9 ? SS : '0' + SS;
  return `${HH}:${MM}:${SS}`;
}
