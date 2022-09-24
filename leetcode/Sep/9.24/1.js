function solution(today, terms, privacies) {
  const answer = [];
  const termMap = new Map();
  for (const term of terms) {
    const [alphabet, month] = term.split(' ');
    termMap.set(alphabet, Number(month) * 28);
  }
  const now = getDate(today);

  for (let i = 0; i < privacies.length; i++) {
    const [date, term] = privacies[i].split(' ');
    const DD = getDate(date);
    const termDate = termMap.get(term);
    const targetDate = DD + termDate;

    if (targetDate <= now) answer.push(i + 1);
  }

  return answer;
}
function getDate(date) {
  const [YYYY, MM, DD] = date.split('.');
  return Number(YYYY) * 12 * 28 + Number(MM) * 28 + Number(DD);
}
