// let count = 0;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const item = 14;

// Сложность = O(log2n) (O от логарифм n по основанию 2)
// У нас 16 элементов в массиве - O(log2 16) = 4
// Т.е. максимум за 4 итерации можно найти любой элемент
function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    // count += 1;
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    }

    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return position;
}

// console.log('res', binarySearch(arr, item));
// console.log('count', count);

function recursiveBinarySearch(arr, item, start, end) {
  let middleIndex = Math.floor((start + end) / 2);
  // count += 1;
  if (item === arr[middleIndex]) {
    return middleIndex;
  }

  if (item < arr[middleIndex]) {
    return recursiveBinarySearch(arr, item, start, middleIndex - 1);
  } else {
    return recursiveBinarySearch(arr, item, middleIndex + 1, end);
  }
}

console.log('res', recursiveBinarySearch(arr, item, 0, arr.length));
// console.log('count', count)
