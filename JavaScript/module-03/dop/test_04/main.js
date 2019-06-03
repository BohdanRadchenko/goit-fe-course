'use strict';
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

function getPx(str) {
  console.log('parseFloat(str) :', parseFloat(str));
  if (typeof str === 'string') {
    return Number.parseFloat(str);
  }
  return null;
  
  // if(Number.isNaN(Number(str))) {
  //   return Number.parseFloat(str);
  // }
  // return null
}

// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // true
console.log( getPx("10.5") === 10.5 ); // true
console.log( getPx("0") === 0 ); // true
console.log( getPx(-1) ); // null
console.log( getPx(10) ); // null


