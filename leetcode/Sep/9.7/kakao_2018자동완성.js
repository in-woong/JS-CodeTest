function solution(words) {
  let answer = 0;
  for (let i = 0; i < words.length; i++) {
    answer += check(words[i], words);
  }
  return answer;
}

function check(word, words) {
  let answer = 0;
  for (let i = 1; i <= word.length; i++) {
    const element = word.slice(0, i);
    let counts = 0;
    for (let n = 0; n < words.length; n++) {
      if (words[n].slice(0, i) == element) counts++;
    }
    if (counts == 1 || i == word.length) {
      answer += i;
      break;
    }
  }
  return answer;
}
