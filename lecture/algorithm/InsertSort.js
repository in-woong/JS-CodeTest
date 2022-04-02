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

let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j];
      if (compare(tmp, arr[j])) {
        break;
      }
    }
    //후치연산 --이 계산되기 때문에 +1을 해야함
    arr[j + 1] = tmp;
  }
};

let init_array = [6, 5, 1, 3, 2, 4];
let array;
let sorting = [insertionSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
