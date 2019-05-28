'use strict';


// 1. Зайдите в консоль своего браузера. 
//При помощи оператора определения типа уточните тип следующих величин:
// «Привет», 123, true, «true».

// let a = 'Привет',
//     b = 123,
//     c = true,
//     d = 'true';
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log('================'); 

// 2. Зайдите в консоль своего браузера.
// При помощи математических операторов (сложение, вычитание и т.д.) 
// найдите значения выражений: 5 + 3, 5 — 3, 5 * 3, 5 / 3.'

// console.log(5+3);
// console.log(5-3);
// console.log(5*3);
// console.log(5/3);
// console.log('================'); 


// 3. Зайдите в консоль своего браузера. 
//При помощи оператора нахождения остатка от деления %,
// найдите значения выражений: 5 % 3, 3 % 5.

// console.log(5%3);
// console.log(3%5);
// console.log('================'); 

// 4. Зайдите в консоль своего браузера. 
//При помощи оператора + (сложение, склеивание) найдите значения выражений: 
//5 + ‘3’ , ‘5’ — 3, 75 + ‘кг’.

// console.log(5 +'3');
// console.log('5' - 3);
// console.log(75 +'кг');
// console.log('================'); 


// 5. Создайте переменные строкового, числового и булева типов.
// Выведите их содержимое.

// const number = 50;
// const str = 'string';
// const bool = true;

// console.log(number, str, bool);
// console.log('================'); 

// 6. Напишите скрипт, который находит площадь прямоугольника 
// длиной 23см., шириной 10см.

// const a1 = 23;
// const b1 = 10;
// let p = a1 * b1;

// console.log('площадь прямоугольника:', p);
// console.log('================'); 

// 9) Створіть змінну num і надайте їй значення 3. 
//Виведіть значення цієї змінної на екран за допомогою методу alert

// let num;
// num = 3;
// alert('num = ' + num);

// 10) Створіть змінні a = 10 і b = 2. 
//Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)

// const a = 10;
// const b = 2;

// let mines = a - 2;
// let multiply = a * b;
// let divine = a % b;

// alert(`- : ${mines}`);
// alert(`* : ${multiply}`);
// alert(` % : ${divine}`);


// 11) Створіть змінні c = 15 і d = 2. 
// Підсумуйте їх, а результат надайте змінної result. 
//Виведіть на екран значення змінної result

// let c = 15;
// let d = 2;

// let result = c + d;
// alert(result);


// 12) Створіть змінні a = 10, b = 2 і c = 5. 
// Виведіть на екран їх суму.

// let a = 10;
// let b = 2;
// let c = 5;

// alert(a+b+c);

// 13) Створіть змінні a = 17 і b = 10. 
//Відніміть від a змінну b і результат надайте зміннії c. 
//Потім створіть змінну d, надайте їй значення 7.
//Складіть змінні c і d, а результат запишіть в змінну result. 
//Виведіть на екран значення змінної result.

// let a = 17;
// let b = 10;
// let d = 7;

// let c = a - b;

// let result = c + d;

// alert(result);

// 14) Запитайте ім'я користувача за допомогою методи prompt. 
//Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'

// let name = prompt('Enter ur name');
// alert(`Ur name ${name}!`);

// 15) Створіть три змінні - година, хвилина, секунда. 
//З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.

// let h = new Date();
// let m = new Date();
// let s = new Date();

// let hours = h.getHours();
// let minutes = m.getMinutes();
// let seconds = s.getSeconds();

// alert(`${hours}:${minutes}:${seconds}`);

// 16) Створіть змінну, надайте їй число. 
//Зведіть це число в квадрат. Виведіть його на екран

// let a = 5;
// console.log(Math.pow(a, 2));


// 17) Переробіть цей код так, щоб в ньому використовувалися операції
// + =, - =, * =, / =. 
//Кількість рядків коду при цьому не повинно змінитися.

//   var num = 47;
//   num = num + 7;
//   num = num - 18;
//   num = num * 10;
//   num = num / 15;
//   alert (num);
  
//   let num = 47;  
//   num += 7;
//   num -= 18;
//   num *= 10;
//   num /= 15;
  
//   alert (num);

// 18) Створіть змінну str і надайте їй значення
// 'Hello World'. Виведіть значення цієї змінної на екран

// let str = 'Hello world';
// alert(str);

// 19) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. 
//За допомогою цих змінних і операції додавання рядків 
//виведіть на екран фразу 'Hello World'.

// let str1 = 'Hello';
// let str2 = 'world!';

// alert(str1 + ' ' + str2);

// 20) Створіть змінну name і надайте їй ваше ім'я.
// Створіть змінну age і надайте їй ваш вік. 
//Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.

// let name = 'Mango';
// let age = 3;

// alert(`Hello, my name is ${name}, and  i\`m ${age} years ago`);

// 21) Створіть змінну str і надайте їй значення 'abcde'.
// Звертаючись до окремих символів цього рядка 
//виведіть на екран символ 'a', символ 'c', символ 'e'

// let str = 'abcde';
// console.log(str[0], str[2], str[4]);


// 22) Створіть змінну num і надайте їй значення '12345'. 
//Знайдіть суму, різницю, добуток, частку цифр цього числа
// і виведіть ці значення в консоль

// let num = '12345';
// let number = num.split('');
// let sum = Number(number[0]) + Number(number[1]) + Number(number[2]) + Number(number[3]) + Number(number[4]);
// let mines = Number(number[0]) - Number(number[1]) - Number(number[2]) - Number(number[3]) - Number(number[4]);
// let divine = Number(number[0]) / Number(number[1]) / Number(number[2]) / Number(number[3]) / Number(number[4]);
// let multiply = Number(number[0]) * Number(number[1]) * Number(number[2]) * Number(number[3]) * Number(number[4]);

// console.log(sum, mines, divine, multiply);


// 23) Дана рядок 'js'. Зробіть з неї рядок 'JS'.

// let str ='js';
// let upStr = str.toUpperCase();

// console.log('upStr :', upStr);

// 24) Дана рядок 'JS'. Зробіть з неї рядок 'js'

// let str ='JS';
// let lowStr = str.toLowerCase();

// console.log('upStr :', lowStr);


// 25) Дана рядок 'я вчу javascript!'. 
//Знайдіть кількість символів в цьому рядку.

// let str = 'я вчу javascript!';
// console.log('str :', str.length);

// 26) Даны переменные a = 10 и b = 3. 
//Найдите остаток от деления a на b.

// let a = 10;
// let b = 3;
// let x = a%b;

// console.log('x :', x);

// 27) Возведите 2 в 10 степень. 
//Результат запишите в переменную st.

// let a = 2;
// let b = 10;

// let st = Math.pow(a,b);
// console.log('st :', st);

// 28) Найдите квадратный корень из 245.

// let sqr = Math.sqrt(245);
// console.log('sqr :', sqr);

// 29) Найдите квадратный корень из 379. 
//Результат округлите до целых, до десятых, до сотых. (toFixed(0))

// let sqr = Math.sqrt(379);
// console.log('sqr :', sqr);
// let sqr0 = sqr.toFixed(0);
// let sqr10 = sqr.toFixed(1);
// let sqr100 = sqr.toFixed(2);

// console.log(sqr0, sqr10, sqr100);

// 30) Найдите квадратный корень из 587. 
//Округлите результат в большую и меньшую стороны 

// let sqr = Math.sqrt(578);

// let ceil = Math.ceil(sqr);
// let floor = Math.floor(sqr);
// let round = Math.round(sqr);

// console.log(sqr);
// console.log(ceil, floor, round);
