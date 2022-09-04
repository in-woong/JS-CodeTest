function solution(n, t, m, timetable) {
  //각 차마다 탈 수 있는 인원 수를 확인
  //마지막 차에 타는 인원수를 확인
  //n==1 일 때와
  //n!==1일 때를 구분
  timetable = timetable
    .map((time) => {
      const array = time.split(':');
      return Number(array[0]) * 60 + Number(array[1]);
    })
    .sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    //i번째 차
    let count = m;
    const busTime = 540 + t * i;
    let lastCrew;
    let j = 0;
    while (timetable && timetable[0] <= busTime && count > 0) {
      lastCrew = timetable.shift();
      count--;
    }
    if (i == n - 1) {
      //마지막일 때
      if (count > 0) return answerFunc(busTime);
      return answerFunc(lastCrew - 1);
    }
  }
}
function answerFunc(time) {
  let hour = Math.floor(time / 60);
  if (hour < 10) {
    hour = '0' + String(hour);
  }
  let min = time % 60;
  if (min < 10) {
    min = '0' + String(min);
  }
  return hour + ':' + min;
}
