function solution(note) {
  
  var answer = '';
  const result = {};
  for (let i = 0; i < note.length; i++) {
    result[note[i]] = result[note[i]] + 1 || 1;
  }
  const sortable = [];
  for (const animal in result) {
    sortable.push([animal, result[animal]]);
  }
  sortable.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (b[1] > a[1]) {
      return 1;
    } else {
      const nameA = a[0].toUpperCase();
      const nameB = b[0].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    }
  });
  
  return sortable[0][0];
}

const input = [['monkey', 'monkey', 'lion', 'bird', 'bird']];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
