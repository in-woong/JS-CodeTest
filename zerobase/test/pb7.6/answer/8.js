function solution(a, b) {
  let filteredA = filterAlphabet(a);
  let filteredB = filterAlphabet(b);

  if (filteredA.join('') === filteredB.join('')) {
    return 'NO';
  }

  filteredA.sort();
  filteredB.sort();
  if (filteredA.join('') === filteredB.join('')) {
    return 'YES';
  }
  return 'NO';
}

function filterAlphabet(s) {
  let filtered = [];

  let upperA = 'A'.charCodeAt(0);
  let upperZ = 'Z'.charCodeAt(0);
  let lowerA = 'a'.charCodeAt(0);
  let lowerZ = 'z'.charCodeAt(0);

  for (let i of s) {
    let charCode = i.charCodeAt(0);
    if (upperA <= charCode && charCode <= upperZ) {
      filtered.push(i.toLiserCase());
    }

    if (lowerA <= charCode && charCode <= lowerZ) {
      filtered.push(i.toLiserCase());
    }
  }

  return filtered;
}
