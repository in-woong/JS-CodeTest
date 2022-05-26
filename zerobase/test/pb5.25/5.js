function solution(bj, one, two) {}

const input = [
  [
    ['혁준', '하밥', '양상', '심심이', '소스왕'],
    ['혁준', '양상'],
    ['심심이', '소스왕'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
