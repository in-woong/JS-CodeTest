let result;
// function forloop(s, t, number) {
//   //   for (let i = 1; i <= number; i++) {
//   //     if (i == 1) {
//   //       acc += s;
//   //     } else {
//   //       acc += t;
//   //     }
//   //     console.log(i, acc);
//   //   }

function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }

  return recursive(s, t, number - 1) + t;
}

result = recursive(1, 3, 5);
console.log(result);
