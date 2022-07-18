var balancedString = function (s) {
  let map = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  };

  for (let i = 0; i < s.length; i++) {
    map[s[i]]++;
  }

  console.log(map);

  let limit = Math.floor(s.length / 4);

  let ans = Infinity;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    map[s[i]]--;

    while (
      start <= s.length &&
      map['Q'] <= limit &&
      map['W'] <= limit &&
      map['E'] <= limit &&
      map['R'] <= limit
    ) {
      ans = Math.min(ans, i - start + 1);
      map[s[start]]++;
      start++;
    }
  }

  return ans;
};
