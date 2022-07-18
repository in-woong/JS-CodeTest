var kWeakestRows = function (mat, k) {
  const array = Array.from({ length: mat.length }, () => 0);
  const soldierArray = mat.map((item, idx) => {
    let sum = 0;
    item.forEach((a) => {
      if (a == 1) sum++;
    });
    return [idx, sum];
  });
  soldierArray.sort((a, b) => {
    if (a[1] - b[1] > 0) return 1;
    else if (a[1] - b[1] < 0) return -1;
    else {
      return a[0] - b[0];
    }
  });
  return soldierArray.slice(0, k).map((item) => item[0]);
};
