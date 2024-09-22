// let count = 0;

// Пузырьковая сортировка - самая неэффективная
// O (n*n) (без коэффициента как в сортировке выбором)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      // count += 1;
    }
  }

  return arr;
}

console.log('res', bubbleSort([4, 7, -3, 6, 1, 8, 0, 3, 23, 657, 23, -6, 44]));
// console.log('count', count);
