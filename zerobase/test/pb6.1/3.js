function solution(s) {
    const sArray= new Set(s.split(" ")) ;
    return sArray.size;
}

const input = [
  'Hello world Nice world',
  'Hello world Nice World',
  'Apple naver Kakao Naver',
  'Where there is a will there is a way',
  'The road to success and the road to failure are almost exactly the same',
  'It is better to fail in originality than to succeed in imitation',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
