function solution(arr, S) {
  //첫글자가 퍼즐에 어디 있는지 확인-> 좌표 출력
  //상하좌우에 두번째 글자가 있는지 확인 -> 좌표출력
  let array = S.split('');
  let temp = array.shift();
  let visit = [];
  if (find(arr, temp) == false) return 'ex';
  let [y, x] = find(arr, temp);
  visit.push([y, x]);
  while (true) {
    let string = array.shift();
    if (!find_ex(arr, string, x, y)) {
      return false;
    }
    [y, x] = find_ex(arr, string, x, y);
    if (includes(visit, y, x)) return 'EX';
    visit.push([y, x]);
    if (array.length === 0) return true;
  }
}

function find(arr, S) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == S) return [i, j];
    }
  }
  return false;
}
function includes(arr, y, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == y && arr[i][1] == x) {
      return true;
    }
  }
  return false;
}
function find_ex(arr, string, x, y) {
  const d = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let i = 0; i < d.length; i++) {
    let dy = d[i][0] + y;
    let dx = d[i][1] + x;
    if (dy >= 0 && dy < 4 && dx >= 0 && dx < 4 && arr[dy][dx] == string) {
      y = dy;
      x = dx;
      return [y, x];
    }
  }
  return false;
}
const input = [
  [
    [
      ['대', '한', '가', '나'],
      ['국', '민', '다', '라'],
      ['마', '바', '사', '아'],
      ['자', '차', '카', '타'],
    ],
    '대한민국',
  ],
  [
    [
      ['가', '나', '콜', '사'],
      ['라', '기', '로', '세'],
      ['미', '모', '리', '움'],
      ['상', '지', '곤', '타'],
    ],
    '참기름',
  ],
  [
    [
      ['헬', '나', '삵', '사'],
      ['로', '키', '랑', '세'],
      ['숭', '티', '리', '움'],
      ['니', '농', '카', '타'],
    ],
    '헬로키티',
  ],
  [
    [
      ['기', '러', '시', '사'],
      ['로', '이', '랑', '세'],
      ['숭', '티', '리', '움'],
      ['니', '농', '카', '타'],
    ],
    '기러기',
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
