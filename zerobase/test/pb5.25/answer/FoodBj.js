function solution(bj, one, two) {
  const reward = 150;

  const prize = one.length * reward + two.length * (reward * 2) + reward * 3;
  const winner = bj.filter((eachBj) => ![...one, ...two].includes(eachBj));
  return `${prize}만원 (${winner[0]})`;
}
