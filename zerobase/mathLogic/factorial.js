let result;

function recursive(number) {
  if (number == 1) return number;
  console.log('1');
  return recursive(number - 1) * number;
}

result = recursive(4);
console.log(result);
