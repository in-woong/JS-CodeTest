function solution(s, k) {
  let i = 1,
    p = 0;
  for (; i < s.length; i++) {
    if (s[i] < s[p]) {
      p = 0;
    } else if (s[i] == s[p]) {
      p++;
    } else {
      break;
    }
  }
  i = i - p;

  s = s.slice(0, i);
  s = s.repeat(Math.ceil(k / i));
  const ans = s.slice(0, k);
  return ans;
}
const input = [
  ['ccaccaca', 20],
  ['zdwvnglnyoyfzummnggzbczgorbhpsdysnvwqel', 1958],
  ['i', 17],
  ['aysjsi', 1170],
  [
    'xliaadfpxuxpswnitnxcsdhcztmtytshblqwgakkjuxqrausepxsqchwtbypbemtameugpgkjallafhsnufttbosjugqamtzqaznnkgxmcyyygmfhbulkjcwkbstrwhlaucqehkfqtabbkxisaoyloihqkqwciuazzfbwrlmkjmzgwmecvnzyvoxhnpfvifzhvkktmyvvadtiwxdwqsynpaacrmjeuqnicbdrzhbnlbfbcojbkbxewkrxmtkvqdqbhoitnqurnklltxqtnoeolepxlqfxiqqvdbjzqwvlknwdqfxfuxlskkmnjxyahxjmqlntywhtnohsfwxausicbpkmwujunmmaqqntakgachuwcelclpefxdslulmssugiqmnlquazlqnnaotjpnrpzfhpqehrxbzlfazpslzbbvcqsjrzobzgxplnpwwvzajrxtoycbmfvqdyizcllpxfzvupdagjkuduidbwenuaii',
    2509,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
