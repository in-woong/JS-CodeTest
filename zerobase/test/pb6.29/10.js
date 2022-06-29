function solution(arr) {
    while (arr.length !== 1) {
      const newArr = [];
      for (let i = 0; i < arr.length / 2; i++) {
        if (i % 2) {
          newArr.push(arr[i*2]-arr[(i*2)+1]);
        } else {
          newArr.push(arr[i*2]+arr[(i*2)+1]);
        }
      }
      arr = newArr;
    }
    return arr[0];
  }