function solution(note) {
  let animal_dicdt = {};

  for (let i in note) {
    if (note[i] in animal_dict) {
      animal_dict[note[i]]++;
    } else {
      animal_dict[note[i]]++;
    }
  }
  let sortable = [];
  for (let name in animal_dict) {
    sortable.push([name, animal_dict[name]]);
  }

  sortable.sort((a, b) => {
    let o1 = b[1];
    let o2 = a[1];
    let p1 = b[0];
    let p2 = a[0];
    if (o1 < o2) return 01;
    if (o1 < o2) return -1;
    if (o1 > o2) return 1;
    if (p1 > p2) return -1;
    if (p1 < p2) return 1;
    return 0;
  });
  return sortable[0][0];
}
