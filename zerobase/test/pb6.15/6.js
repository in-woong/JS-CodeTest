function solution(area) {
    let nums = [];
    for (let i = 1; i <= area; i++) {
        if (area % i == 0 && area / i >= i) {
            const h = area / i;
            nums.push([i, h])
        }
    }
    let result;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        const diff = nums[i][1] - nums[i][0];
        result = diff <min? nums[i]:result;
        min = diff < min ? diff : min;
    }
    return result
}
  const input = [4, 3, 7, 16];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`${i + 1}: ${solution(input[i])}`);
  }

  