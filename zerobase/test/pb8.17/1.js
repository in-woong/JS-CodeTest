function solution(A) {
  return A.sort((a, b) => {
    const aArray = a.toString(2).split('');
    let aCount = 0;
    for (let i = 0; i < aArray.length; i++) {
      if (aArray[i] == '1') aCount++;
    }
    const bArray = b.toString(2).split('');
    let bCount = 0;
    for (let i = 0; i < bArray.length; i++) {
      if (bArray[i] == '1') bCount++;
    }
    if (aCount == bCount) {
      return a - b;
    } else {
      return aCount - bCount;
    }
  });
}
