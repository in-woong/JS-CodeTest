function solution(n, graph) {
  //나와 친구가 아닌 사람들 중에서
  //나의 친구들 중 1명이상과 친구인 사람 추천
  const array = [];
  for (let i = 0; i < n; i++) {
    const map = { friend: [], none: [] };
    for (let j = 0; j < n; j++) {
      if (graph[i][j] == 1) {
        map['friend'].push(j);
      } else {
        map['none'].push(j);
      }
    }

    array.push(map);
  }
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    const iNoneArray = array[i]['none'];
    const iFriendArray = array[i]['friend'];
    let temp = 0;
    for (let j = 0; j < iNoneArray.length; j++) {
      if (i == iNoneArray[j]) continue;
      const friendArray = array[iNoneArray[j]]['friend'];
      for (let k = 0; k < friendArray.length; k++) {
        if (iFriendArray.includes(friendArray[k])) {
          temp++;
          break;
        }
      }
    }
    answer.push(temp);
  }
  return answer;
}
