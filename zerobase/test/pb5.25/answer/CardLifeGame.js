function solution(cards) {
  while (cards.length > 1) {
    cards.sort((a, b) => a - b);
    battle(cards);
  }
  return cards.length ? cards[0] : 0;
}

function battle(cards) {
  const life1 = cards.pop();
  const life2 = cards.pop();

  const leftLife = Math.abs(life1 - life2);

  if (leftLife) cards.push(leftLife);s
}
