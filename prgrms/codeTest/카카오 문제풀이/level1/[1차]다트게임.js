function solution(dartResult) {
  const regex = /\d{1,2}[SDT]{1}[*|#]?/g;
  let result = [];
  for (const dart of dartResult.match(regex)) {
    const game = [...dart.split(/([SDT]{1})/)];
    const score = game[0];
    let bonus = 1;
    let option = 1;
    switch (game[1]) {
      case 'S':
        bonus = 1;
        break;
      case 'D':
        bonus = 2;
        break;
      case 'T':
        bonus = 3;
        break;
    }
    switch (game[2]) {
      case '*':
        if (result.length !== 0) result[result.length - 1] *= 2;
        option = 2;
        break;
      case '#':
        option = -1;
        break;
      default:
        break;
    }
    result.push(score ** bonus * option);
  }
  return result.reduce((a, b) => a + b);

  return 1;
}

const input = [
  '1S2D*3T',
  '1D2S#10S',
  '1D2S0T',
  '1D#2S*3S',
  '1T2D3D#',
  '10D2S3T*',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
