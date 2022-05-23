function solution(nums) {
  let students = Array.from({ length: nums.length }, (_, i) => i + 1);

  return students.filter(function (num) {
    return nums.indexOf(num) < 0;
  });
}

const input = [
  [1, 3, 4, 8],
  [22, 99, 88],
  [1, 2, 3],
  [12, 2, 3],
  [11, 21, 3],
  [1, 2, 3, 5, 8, 10, 12, 15, 18, 20],
];


for (let i = 0; i < input.length; i++) {
    console.log(`${i + 1} ${solution(input[i])}`);
  }
  