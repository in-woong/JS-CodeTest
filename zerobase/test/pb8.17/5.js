function solution(array, s) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const idx = s.indexOf(array[i]);

    let bool = true;
    for (j = 0; j < array[i].length; j++) {
      if (bool && s[j + idx] !== array[i][j]) bool = false;
    }
    if (bool && s.length - idx == array[i].length) count++;
  }

  return count;
}
