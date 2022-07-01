function solution(arr) {
    while (arr.length !== 1) {
      arr = doProcess(arr)
    }
  
    return arr[0]
  }
  
  function doProcess(arr) {
    const newArr = []
  
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length / 2) {
        if (i % 2 === 0) {
          newArr[i] = Math.min(arr[i * 2], arr[i * 2 + 1])
        } else {
          newArr[i] = Math.max(arr[i * 2], arr[i * 2 + 1])
        }
      }
    }
  
    return newArr
  }
  