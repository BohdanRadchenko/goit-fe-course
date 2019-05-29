"user strict";

//COMPLETED
/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
*/

const numbers = [];
let num;
let n = 100;

// do {
//   num = prompt('Enter ur number');
//   if (num > 100) {
//     numbers.push(num);
//     console.log('object :', numbers);
//   } else {
//     confirm('Enter number most 100');
//   }
// } while (num !== null)  

while (num !== null) {
  num = prompt("Введите число больше 100");
    if (num > n) {
      numbers.push(num);
      console.log("array:", numbers);
  } else if(num <= n) {
    confirm("Введите число БОЛЬШЕ 100!!!");
  }
}