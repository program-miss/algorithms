// let count = 0;

// Быстрая сортировка (сортировка Хоара) - разделяй и властвуй
// Делим массив на подмассивы и каждый раз - рекурсивно
// Мы выбираем опорный элемент у каждого массива (случайно, но чаще всего берут центральный)
// Пробегаемся по массиву и все элементы, которые по значению меньше, чем опорный, добавляем в 1 массив
// Все, которые больше - добавляем в другой массив
// Продолжается это до тех пор, пока длина подмассива не будет равна 1 (базовый случай выхода из рекурсии)
// O(log2n * n) - O большое от логарифм по основанию 2 от n, умноженное на n

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    // count += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(
  'quickSort',
  quickSort([4, 7, -3, 6, 1, 8, 0, 3, 23, 657, 23, -6, 44])
);
// console.log('count', count);
