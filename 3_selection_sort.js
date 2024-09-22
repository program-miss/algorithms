// let count = 0;

// Сортировка выбором - находим минимальный => меняем местами с 1 => =/=
// O(n*n)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      // count += 1;
    }

    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }

  return arr;
}

console.log(
  'res',
  selectionSort([4, 7, -3, 6, 1, 8, 0, 3, 23, 657, 23, -6, 44])
);
// console.log('count', count);
