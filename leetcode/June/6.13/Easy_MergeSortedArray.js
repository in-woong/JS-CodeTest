function solution(nums1, m, nums2, n) {
  //뒤에서부터 비교
  //n2의 값을 찾아간다고 생각
  //nums1[i] i도 맨 뒤에서부터 하나하나 만들어간다고 생각.
  //nums1,2의 맨끝 원소를 비교해서 맨 끝 부터 찾아나간다.

  let i = nums1.length - 1;
  while (m > 0 && n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[i] = nums1[m - 1];

      m--;
    } else if (nums1[m - 1] < nums2[n - 1]) {
      nums1[i] = nums2[n - 1];
      n--;
    }
    i--;
  }

  while (n > 0) {
    nums1[i] = nums2[n - 1];
    n--;
    i--;
  }
  return nums1;
}

const input = [
  [[1, 2, 6, 0, 0, 0], 3, [2, 5, 6], 3],
  [[1], 1, [], 0],
  [[0], 0, [1], 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `${i + 1}: ${solution(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
