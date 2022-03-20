let result;

function recursive(number) {
  if (number == 1 || number == 0) {
    return number;
  }

  return recursive(number - 1) + recursive(number - 2);
}

result = recursive(5);
console.log(result);
