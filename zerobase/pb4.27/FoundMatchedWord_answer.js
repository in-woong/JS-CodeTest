function solution(puzzle, word) {
  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      if (move(puzzle, word, x, y, 0)) return true;
    }
  }
  return false;
}
const SIZE = 4;
const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function move(puzzle, word, x, y, moveIndex) {
  //puzzle에 x,y값을 넣었을 때 word[moveIndex]와 값이 같아야 밑으로 내려갈 수 있음
  if (puzzle[x][y] !== word[moveIndex]) return false;
  if (moveIndex === word.length - 1) return true;

  puzzle[x][y] = 'x';

  for (const [dx, dy] of DIRECTIONS) {
    const dirX = x + dx;
    const dirY = y + dy;
    if (0 <= dirX && dirX < SIZE && 0 <= dirY && dirY < SIZE) {
      if (move(puzzle, word, dirX, dirY, moveIndex + 1)) return true;
    }
  }
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
