'use strict';

//COMPLETED

/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/


function countTotalSalary(salaries) {
 const valueArr = Object.values(salaries);
 console.log('val :', valueArr);

 let total = 0;

 for (let value of valueArr) {
   console.log('value :', value);
   total += value;
 }
 return total;
}

// Вызовы функции для проверки
console.log(
  countTotalSalary({})
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330