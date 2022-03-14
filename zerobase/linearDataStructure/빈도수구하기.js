function answer(s, e) {
  let nums;
  let result = Array.from({ length: 10 }, () => 0);
  for (let i = s; i <= e; i++) {
    nums = i;
    while (nums != 0) {
      result[nums % 10]++;
      nums /= 10;
      nums = parseInt(nums);
    }
  }
  //   nums.forEach((num) => {
  //     // switch (num) {
  //     //   case '0':
  //     //     result[0] += 1;
  //     //     break;
  //     //   case '1':
  //     //     result[1] += 1;
  //     //     break;
  //     //   case '2':
  //     //     result[2] += 1;
  //     //     break;
  //     //   case '3':
  //     //     result[3] += 1;
  //     //     break;
  //     //   case '4':
  //     //     result[4] += 1;
  //     //     break;
  //     //   case '5':
  //     //     result[5] += 1;
  //     //     break;
  //     //   case '6':
  //     //     result[6] += 1;
  //     //     break;
  //     //   case '7':
  //     //     result[7] += 1;
  //     //     break;
  //     //   case '8':
  //     //     result[8] += 1;
  //     //     break;
  //     //   case '9':
  //     //     result[9] += 1;
  //     //     break;
  //     // }
  //   });

  return result;
}

let input = [
  [129, 137],
  [1412, 1918],
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}
