function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};

Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

function answer(class_1, class_2) {
  let result = [];
  //   for (let i = 0; i < class_1.length; i++) {
  //     if (class_2.includes(class_1[i])) {
  //       result.push(class_1[i]);
  //     }
  //   }
  let tmp = new Dictionary();
  for (let i = 0; i < class_2.length; i++) {
    tmp.set(class_2[i], true);
  }

  for (let i = 0; i < class_1.length; i++) {
    if (tmp.has(class_1[i])) {
      result.push(class_1[i]);
    }
  }

  return result;
}

let input = [
  [
    ['Kali', 'Oliver', 'Naomi'],
    ['Oliver', 'Naomi', 'Maya'],
  ],
  [
    ['Roxy', 'Olga', 'Kara', 'Nana'],
    ['Oliver', 'Roxy', 'Kara', 'Nana', 'Maya'],
  ],
  [
    ['Roxy', 'Ravi', 'Nana', 'Rei', 'Karis', 'Mana', 'Namoi'],
    ['Olga', 'Nana', 'Rei', 'Oliver', 'Kali', 'Ravi', 'Kara'],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}
