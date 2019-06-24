'use strict';
/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

// function findLongestWord(str) {
//   let longWord = '';
//   for(let i = 0; i < str.split(' ').length; i++) {
//     if (str.split(' ')[i].length > longWord.length) {
//       longWord = str.split(' ')[i];
//     }
//   }
//   return longWord;
// }


function findLongestWord(str){
  let longWord = ''; 
  for (let k of str.split(' ')) {
    if (k.length > longWord.length ) {
      longWord = k;
    }
  }
  return longWord;
} 


// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // 'Google'

console.log(
  findLongestWord("May the force be with you")
); // 'force'



