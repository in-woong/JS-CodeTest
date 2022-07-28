function solution(s) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  const map = new Map();
  for (let i = 0; i < alpha.length; i++) {
    map.set(alpha[i], 0);
  }

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1);
  }
  const keys = Array.from(map.values());
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] == 0) return false;
  }
  return true;
}
