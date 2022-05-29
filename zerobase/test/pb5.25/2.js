function solution(useageArr, fee) {
    let sum = useageArr.reduce((acc,cur)=>acc+cur,0);
    return sum *fee;
}

const input = [[1, 3, 5], 5];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
