function solution(arr) {
  const object = {};
  for (let i = 0; i < arr.length; i++) {
    if (object[arr[i]]) {
      delete object[arr[i]];
    } else {
      object[arr[i]] = 1;
    }
  }
  const keys = Object.keys(object);
  if (keys.length) {
    return Number(keys[0]);
  } else {
    return 0;
  }
}
