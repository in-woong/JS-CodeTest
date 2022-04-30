function remove(input) {
  let a = '';
  for (let i = 0; i < input.length; i++) {
    if (a == input[i]) {
      const removed = input.splice(i - 1, 2);
    }
    a = input[i];
  }
  return input.join('');
}

function solution(n) {
  let array = n.split('');
  let set = new Set(array);
  while(set.size===array.length){
      array = remove(array);
  }
  console.log(set.size);
  return array;
}

const input = ['ABBA', 'ACA', 'ACACA', 'ACAACABB', 'ACADDFFACABB'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
