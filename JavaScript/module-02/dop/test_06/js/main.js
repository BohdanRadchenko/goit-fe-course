'use strict';

//COMPLETED

/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you ";
let longestWord;
let n = 0;

// console.log(longestWord); // 'force'

let messSplit = message.split(' ');
console.log('message :', messSplit);

for (let i = 0, max = messSplit.length; i < max; i++) {
      if (messSplit[i].length > n) {
        n = messSplit[i].length;
        longestWord = messSplit[i]
      }  
}

console.log('longestWord :', longestWord, ';' ,'symb:', n);



// for .... of
// for ( let i of messSplit)  {
//   console.log('i :', i);
//   if (i.length > idx) {
//     idx = i.length;
//     longestWord = i;
//   }
// }
// console.log('longWord :', longestWord);