// 다음으로 큰 순열을 구하기위해서는 가장 작은 단위에서 숫자를 변경하고 그 뒤의 숫자들을 오름차순하는 방법이있다.

// 가장 작은 단위에서 변경 가능한 숫자를 찾는다. 이유는 순열을 오름차순으로 배치하고 순서를 확인해보면 알 수 있다.
// left 인덱스의 위치를 찾았다면, left의 오른쪽 배열의 값에서 보다 큰 수를 찾아 swap한다.
// 마지막으로 left의 오른쪽의 값을들 reverse해주면된다.

var solution = function (nums) {
  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

  let i = nums.length - 2;
  console.log(i);
  while (0 <= i && nums[i] >= nums[i + 1]) i--;
  console.log(i);
  if (0 <= i) {
    let j = nums.length - 1;
    while (nums[i] >= nums[j]) j--;
    swap(nums, i, j);
  }
  nums.push(...nums.splice(i + 1).reverse());

  return nums;
};

const input = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 1, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
