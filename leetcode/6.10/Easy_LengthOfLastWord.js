function solution(s) {
  // Will count the length of the word
  let count = 0;

  // We start from the back is we mostly care about the last word
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s[i]);
    // Check if its empty and count is great than 0. If count is greater, then we already saw a word
    if (s[i] === ' ' && count > 0) return count;
    // If it's an empty string at the start of the back. We want to just conitnue down instead of adding it as a letter
    if (s[i] === ' ') continue;
    // If it isn't an empty string, it means we are on the final word. Add it to the count and move on to the next index
    count++;
  }

  // return the length of the last word
  return count;
}

const input = [
  'Hello world',
  '   fly me   to   the moon  ',
  'luffy is still joyboy',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
