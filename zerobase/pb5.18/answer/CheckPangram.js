/**
 * @param s {string}
 * @returns {boolean}
 */
function solution(s) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < ALPHABET.length; i++) {
    const c = ALPHABET.charAt(i);
    if (s.indexOf(c) < 0) {
      return false;
    }
  }

  return true;
}

const input = [
  'abcdefghijklmnopqrstuvwxyz',
  'a b c d e f g h i j k l m n o p q r s t u v w x y z a b c',
  'bcdefghijklmnopqrstuvwxyz',
  'aaaaaaaaaaaaaaaaaaaaaaaaaa',
  'nasoiegasjflkesklfjaslkdfjsla',
  'thequickbrownfoxjumpsoverthelazydog',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
