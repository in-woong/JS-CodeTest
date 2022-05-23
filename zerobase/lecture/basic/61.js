function answer(str) {
  let fix_str = '';
  for (let item of str.split(' ')) {
    fix_str += item[0].toUpperCase() + item.slice(1) + ' ';
  }

  return fix_str;
}

let input = [
  'Hello, My name is john',
  'This week is closed due to COVID-19',
  'fifty percent off this week',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${answer(input[i])}`);
}
