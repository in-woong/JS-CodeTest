/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
  //아무 그룹에 속하지 못하면 -1;
  const n = source.length;

  let group = Array.from({ length: n }, () => -1);

  for (let swap of allowedSwaps) {
    const [first, second] = swap;

    const rootFirst = find(first);
    const rootSecond = find(second);

    if (rootFirst !== rootSecond) {
      //무조건 첫번째 원소의 값이 root값, 두번째 요소를 변화시킨다.
      group[rootSecond] = rootFirst;
    }
  }

  function find(node) {
    if (group[node] !== -1) {
      return find(group[node]);
    }
    //끝까지 추적한 그룹 root값을 알 수 있다.
    return node;
  }

  const ansGroup = [];
  for (let i = 0; i < n; i++) {
    ansGroup.push(find(i));
  }
  let sourceObj = {};
  let targetObj = {};
  for (let i = 0; i < n; i++) {
    if (sourceObj[ansGroup[i]]) {
      sourceObj[ansGroup[i]].push(source[i]);
    } else {
      sourceObj[ansGroup[i]] = [source[i]];
    }

    if (targetObj[ansGroup[i]]) {
      targetObj[ansGroup[i]].push(target[i]);
    } else {
      targetObj[ansGroup[i]] = [target[i]];
    }
  }
  let ans = 0;

  for (key in sourceObj) {
    count(sourceObj[key], targetObj[key]);
  }
  function count(arrayOne, arrayTwo) {
    let i = 0;
    while (arrayOne.length && i < arrayTwo.length) {
      const item = arrayTwo[i];
      const index = arrayOne.indexOf(item);
      if (index > -1) {
        arrayOne.splice(index, 1);
      }
      i++;
    }
    ans += arrayOne.length;
  }
  return ans;
};
