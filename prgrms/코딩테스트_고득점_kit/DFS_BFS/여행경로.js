function solution(tickets) {
  let result = [];
  tickets.forEach((ticket, idx) => {
    if (ticket[0] == 'ICN') {
      dfs(
        ticket[1],
        [...tickets.slice(0, idx), ...tickets.slice(idx + 1)],
        [...ticket],
        result
      );
    }
  });
  console.log(result.sort());
  return 1;
}
function dfs(depart, remainTickets, currentRoutes, result) {
  if (remainTickets.length == 0) {
    result.push(currentRoutes);
  } else {
    for (let i = 0; i < remainTickets.length; i++) {
      if (remainTickets[i][0] == depart) {
        dfs(
          remainTickets[i][1],
          [...remainTickets.slice(0, i), ...remainTickets.slice(i + 1)],
          [...currentRoutes, remainTickets[i][1]],
          result
        );
      }
    }
  }
}

const input = [
  [
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ],
  [
    ['ICN', 'ATL'],
    ['ICN', 'SFO'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ],
  [
    ['ICN', 'AOO'],
    ['AOO', 'BOO'],
    ['BOO', 'AOO'],
    ['COO', 'DOO'],
    ['DOO', 'EOO'],
    ['EOO', 'DOO'],
    ['DOO', 'COO'],
    ['COO', 'BOO'],
    ['BOO', 'COO'],
  ],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} : ${solution(input[i])}`);
}
