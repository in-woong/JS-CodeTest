const input = [
  ,
  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob', 'ant'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew', 'bobby'],
      ['andrew', 'ant'],
    ],
    2,
  ],

  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob', 'ant'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew', 'bobby'],
      ['andrew'],
    ],
    2,
  ],

  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob', 'ant'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew'],
      ['andrew'],
    ],
    출력,
  ],

  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew'],
      ['andrew'],
    ],
    3,
  ],

  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [['ant'], ['bob'], ['bob'], ['bobby'], ['andrew'], ['andrew']],
    4,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
