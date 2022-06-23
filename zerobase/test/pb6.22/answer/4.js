function solution(members) {
  answer = [];
  member_set = new Set();
  members.forEach((e, i) => {
    member_set.add(e);
  });

  let mafia = -1;

  member_set.forEach((e, i) => {
    let cnt = members.filter((ele) => e === ele).length;
    if (cnt == 2) {
      mafia = e;
    }
  });

  members.forEach((e, i) => {
    if (e === mafia) {
      answer.push(i);
    }
  });
}
