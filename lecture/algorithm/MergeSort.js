let swap = function (arr, indx_1, indx_2) {
  let tmp = arr[indx_1];
  arr[indx_1] = arr[indx_2];
  arr[indx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};
let descending = function (x, y) {
  return y < x;
};

let mergeSort = function (arr, compare) {
  //재귀 종료 조건
  if (arr.length === 1) return arr;

  let m = (arr.length / 2).toFixed(0);

  let left = mergeSort(arr.slice(0, m), compare);
  let right = mergeSort(arr.slice(m), compare);

  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
  return arr;
};

let init_array = [6, 5, 1, 3, 2, 4];
let array;
let sorting = [mergeSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
