'use strict';

//============task01===========
/*
Напишите скрипт который реализует следующий функционал.

Есть кнопка с классом button, текст которой отображает 
кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// let count = 0;
// const button = document.querySelector('.button');
// function counter(event) {
//   count ++;
//   button.textContent = count;
// }
// button.addEventListener('click', counter);
// console.log('button :', button);




//============task02===========
/*
Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// const button = document.querySelector('[data-action="add"]');
// console.log('button :', button);
// const inputOne = document.querySelector('.expression > input');
// console.log('inputOne :', inputOne);
// const inputTwo = inputOne.nextElementSibling.nextElementSibling;
// console.log('inputTwo :', inputTwo);
// const result = document.querySelector('.result');
// console.log('result :', result);
// function summ(event) {
//   result.textContent = Number(inputOne.value) + Number(inputTwo.value);
// }
// button.addEventListener('click', summ);

//============task03===========
/*
Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 

- Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
- Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
- Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
- Привяжите вызовы методов и значение счетчика к раметке
*/
// const subButton = document.querySelector('[data-action="sub"]')
// const addButton = document.querySelector('[data-action="add"]')
// console.log('subButton :', subButton);
// console.log('addButton :', addButton);

// const value = document.querySelector('.value');
// console.log('value :', value);

// let counter = 0;
// function subClick() {
//   value.textContent = counter--;
// }
// function addClick() {
//   value.textContent = counter++;
// }
// subButton.addEventListener('click', subClick);
// addButton.addEventListener('click', addClick);

//============task04===========
/*
Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
после чего нажимает кнопку "Submit" и происходит отправка формы.

При отправке формы:
- не должна перезагружаться страница
- необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
// const inputAll = document.querySelectorAll('input');
// console.log(inputAll);
// const inputArr = Array.from(inputAll);
// console.log('inputArr :', inputArr);
// const submitButton = document.querySelector('[type="submit"]');
// console.log('submitButton :', submitButton);
// const result = document.querySelector('.result');
// console.log(result);

// function check(event) {
//   event.preventDefault();
//   const check = inputArr.filter(radio => radio.checked).map(el => el.value);
//   result.innerHTML = `Result: ${check}`;
// }
// submitButton.addEventListener('click', check);

//============task05===========
/*  Дан список изображений. Сделайте так, чтобы по клику на картинку 
алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const images = document.querySelector('.images');
// console.log('images :', images);
// function srcAlert (event) {
//   alert(event.target.src);
// }
// images.addEventListener('click', srcAlert);

//============task06===========
/*
Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
она находится. Обязательно используйте делегирование событий.
*/
// const list = document.querySelector('.list');
// console.log('list :', list);

// const listItems = document.querySelectorAll('li');
// const items = Array.from(listItems);
// console.log('items :', items);

// const delItems = document.querySelectorAll('[data-action="delete"]');
// console.log('delItems :', delItems);

// function deleteElements(event) {
//       const buttonAction = event.target.dataset.action;

//       if (buttonAction === 'delete') {
//           const itemsList = event.target.closest('li');
//           const rem = items.find(el => el === itemsList);
//           rem.remove();
//           return rem;
//       }
// }

// list.addEventListener('click', deleteElements);

//============task07===========
/*
Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
инпуты проверяли свое содержимое на правильное количество символов. 

- Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
- Если введено подходящее количество, то outline инпута становится зеленым, 
если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const list = document.querySelector('.input-list');
// // console.log('list :', list);

// const inputOne = document.querySelector('input[data-length="2"]');
// // console.log('inputOne :', inputOne);
// const inputTwo = document.querySelector('input[data-length="4"]');
// // console.log('inputTwo :', inputTwo);
// const inputThree = document.querySelector('input[data-length="8"]');
// // console.log('inputThree :', inputThree);
// const inputFour = document.querySelector('input[data-length="16"]');
// // console.log('inputFour :', inputFour);

// function listener(input) {
//   input.addEventListener('blur', inputFocus);

//   function inputFocus(event) {
//     if (input.value.length === Number(input.dataset.length)) {
//       input.classList.add('valid')
//       // input.classList.remove('invalid')
//     } else {
//       input.classList.add('invalid');
//     }
//   }
// }

// listener(inputOne);
// listener(inputTwo);
// listener(inputThree);
// listener(inputFour);

//============task08===========
/*
Напишите скрипт который:

- При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
- При наборе текста в инпуте (событие input), текущее его значение должно 
отображаться в p.input-value 
*/
// const message = document.querySelector('.message');
// const input = document.querySelector('input');
// const value = document.querySelector('.input-value');

// function inFocus(event) {
//   console.log('event :', event);
//   message.textContent = "Input is in focus!";
// }

// function outFocus(event) {
//   value.textContent = input.value;
// }

// input.addEventListener('focus', inFocus);
// input.addEventListener('input', outFocus);



//============task09===========
/*
На вкладках HTML и CSS уже готовая верстка модального окна.
По умолчанию модальное окно скрыто классом modal-hidden.

Напишите скрипт который реализует следующее поведение:

- При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
должно появляться. Для этого необходимо убрать класс modal-hidden. 
Для выбора модального модального окна используйте класс js-modal-backdrop

- При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// const openModal = document.querySelector('[data-action="open-modal"]');
// console.log('openModal :', openModal);

// const modalHidden = document.querySelector('.js-modal-backdrop');
// console.log('modalHidden :', modalHidden);

// const modalContent = document.querySelector('.modal-content')
// console.log('modalContent :', modalContent);

// const modalClose = document.querySelector('[data-action="close-modal"]');
// console.log('modalClose :', modalClose);

// function listener(input, prop) {
//   input.addEventListener('click', classCat);

//   function classCat(event) {
//     modalHidden.classList[prop]('modal-hidden');
//   }
// }


// listener(openModal, 'remove');
// listener(modalHidden, 'add');

// function classNew(event) {
//   if (event.target === modalHidden) {
//     modalHidden.classList.add('modal-hidden');
//   }
// }

// modalHidden.addEventListener('click', classNew);



//============task10===========
/*
  Ознакомьтесь с HTML и CSS.
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// const list = document.querySelector('.js-menu');

// list.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (event.target.nodeName !== "A") return
//     const target = event.target;
//     const currentActiveLink = document.querySelector('a.active');
//     if (currentActiveLink) {
//         currentActiveLink.classList.remove('active');
//     }
//     target.classList.add('active');
//     // secActiveLink(target);
// })

// function secActiveLink(target) {
//     const currentActiveLink = document.querySelector('a.active');
//     if (currentActiveLink) {
//         currentActiveLink.classList.remove('active');
//     }
//     target.classList.add('active');
// }