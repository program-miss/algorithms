function factorial(n) {
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}

console.log('res-factorial', factorial(5));

// Числа Фибоначчи - каждое последующее число равно сумме 2-х предыдущих
// 1, 1, 2, 3, 5, 8, 13, 21
function fibonachi(n) {
  // n - номер числа в цепочке
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonachi(n - 1) + fibonachi(n - 2);
}
console.log('res-fibonachi', fibonachi(4));
