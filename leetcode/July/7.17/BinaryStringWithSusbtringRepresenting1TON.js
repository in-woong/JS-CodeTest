var queryString = function (S, N) {
  for (let i = N; i >= 1; i--) {
    let bin = (i >>> 0).toString(2);
    console.log(bin);
    if (S.search(bin) === -1) return false;
  }
  return true;
};
