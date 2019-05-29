'user strict'
//COMPLETED
/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// В переменной message хранится произвольная строка
const message = "Proin sociis natoque et magnis parturient montes mus";
let price;

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
let words = message.split(' ');
console.log(words);

// Выведи в консоли длину массива words
console.log(words.length); // 8

// Вычисли сколько будет стоить гравировка и запиши результат в переменную price
price = 10;
console.log(price * words.length); // 80