function solution(n, colors, edges) {
  const map = new Map();
  for (let i = 0; i < edges.length; i++) {
    if (map.get(edges[i][0])) {
      map.set(edges[i][0], [...map.get(edges[i][0]), edges[i][1]]);
    } else {
      map.set(edges[i][0], [edges[i][1]]);
    }
  }

  const answer = [];
  for (let i = 1; i <= n; i++) {
    const temp = count(i, {});
    const max = Math.max(...Object.values(temp));
    let sum = 0;
    for (key in temp) {
      if (temp[key] == max) sum += Number(key);
    }
    answer.push(sum);
  }

  function count(n, colorCountObject) {
    if (map.get(n)) {
      const array = map.get(n);
      for (let i = 0; i < array.length; i++) {
        count(array[i], colorCountObject);
      }
    }
    const nColor = colors[n - 1];

    if (colorCountObject[nColor]) {
      colorCountObject[nColor] += 1;
    } else {
      colorCountObject[nColor] = 1;
    }

    return colorCountObject;
  }
  return answer;
}
