// let count = 0;

// Сложность = O(n) (O от n)
// n - кол-во элементов в массиве
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    // count += 1;
    if (arr[i] === item) {
      return arr[i];
    }
  }

  return null;
}

console.log(
  'res',
  linearSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4)
);
// console.log('count', count);
