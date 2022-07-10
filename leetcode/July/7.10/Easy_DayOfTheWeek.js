function solution(day, month, year) {
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const answer = week[new Date(`${year}-${month}-${day}`).getDay()];
  return answer;
}

const input = [
  [31, 8, 2019],
  [18, 7, 1999],
  [15, 8, 1993],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(...input[i])}`);
}
