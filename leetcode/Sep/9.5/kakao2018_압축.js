function solution(msg) {
  //사전에 다음 단어까지 포함해서 없을때까지 확인
  // 없을때는 등록
  // 다음으로 이동
  const dic = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const check = (n) => {
    let i = 1;
    let idx = -1;
    //n은 index,i는 글자 개수
    while (n + i <= msg.length && dic.includes(msg.substr(n, i))) {
      idx = dic.indexOf(msg.substr(n, i));
      i++;
    }
    dic.push(msg.substr(n, i));
    return [idx, i];
  };

  const answer = [];

  for (let i = 0; i < msg.length; i++) {
    const [idx, n] = check(i);
    i += n - 2;
    answer.push(idx + 1);
  }
  return answer;
}
const input = ['KAKAO'];
for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
