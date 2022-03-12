function answer(arr) {
  const new_set = new Set(arr);
  const new_arr = Array.from(new_set);

  return new_arr;
}

let input = [
  ['john', 'alice', 'alice'],
  ['Hello', 'hello', 'HELLO', 'hello'],
  ['kiwi', 'banana', 'mango', 'kiwi', 'banana'],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
