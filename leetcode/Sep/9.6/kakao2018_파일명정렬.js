function solution(files) {
  return files.sort((fileA, fileB) => {
    const [numberA, numberB] = [
      fileA.match(/[0-9]+/g)[0],
      fileB.match(/[0-9]+/g)[0],
    ];
    const [hidxA, hidxB] = [fileA.indexOf(numberA), fileB.indexOf(numberB)];
    const [headA, headB] = [
      fileA.slice(0, hidxA).toLowerCase(),
      fileB.slice(0, hidxB).toLowerCase(),
    ];
    if (headA == headB) {
      return Number(numberA) - Number(numberB);
    } else {
      if (headA > headB) return 1;
      else return -1;
    }
  });
}
