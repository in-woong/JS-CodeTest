let result;
function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }

  return recursive(s, t, number - 1) * t;
}

result = recursive(3, 2, 5);

console.log(result);
