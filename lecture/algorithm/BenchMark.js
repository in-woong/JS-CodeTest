function benchmark(arr, callback) {
  let start = Date.now();
  callback(arr);
  return Date.now() - start;
}
