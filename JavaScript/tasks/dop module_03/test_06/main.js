'use strict';
/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

function findLargestNumber(numbers) {
  let max = 0;
  for (let k of numbers) {
    if (k > max) {
      max = k;
    }
  }
  return max;
}

// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // 128