"use strict";

//COMPLETED

/*
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива:
     "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

let arr = [1, 2, 3, 4, 5, 6, 6];
let inArr;
let removed;
let sum = 0;

do {
  inArr = prompt("Enter number");
  if (inArr === null) {
    alert('cencel, ok')
  } else if (Number(inArr) <= 0 || Number(inArr) >= 0) {
    arr.push(Number(inArr));
  } else {
    alert('Enter NUMBER or select "cencel" button')
  }
} while (inArr !== null);

console.log('in u array:', arr.length, 'elements');
console.log('Array:', arr);

if (arr.length > 0) {
  for (let i of arr ) {
    sum += arr[i];
  }
}
console.log('summ ur array:', sum);