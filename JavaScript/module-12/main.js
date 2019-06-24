'use strict';
//=================task01============================
/*
 * Ознакомься с содержанием панелей HTML и CSS.
 * 
 * Напиши скрипт который сохраняет выбранную пользователем 
 * тему в localStorage и, при следующих посещениях страницы, 
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 * 
 * При выборе темы, добавляй на элемент body соответствующий класс. 
 */
// const body = document.querySelector('body');
// console.log('body :', body);

// let theme = localStorage.getItem('theme');
// body.className = theme;

// const buttonLight = document.querySelector("button[data-theme='light']");
// const buttonDark = document.querySelector("button[data-theme='dark']");

// function ligthTheme() {
//     localStorage.setItem('theme', 'theme-light');
//     setTheme()
// }

// function darkTheme () {
//     localStorage.setItem('theme', 'theme-dark');
//     setTheme()
// }

// function setTheme() {
//     theme = localStorage.getItem('theme');
//     body.className = theme;
// }

// buttonLight.addEventListener("click", ligthTheme);
// buttonDark.addEventListener("click", darkTheme);

//=================task02============================
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */
// const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548",
//     "#AFA800",
// ];

// const startButton = document.querySelector('.button[data-action="start"]');
// const stopButton = document.querySelector('.button[data-action="stop"]');
// const body = document.querySelector('body');

// const theme = localStorage.getItem('color');
// body.style.backgroundColor = theme;

// let timeSet;
// let count = 0;

// function startFn() {

//     stopButton.style.display = 'block';0
//     startButton.disabled = !startButton.disabled;
//     startButton.classList.add('disabled');
//     startButton.removeEventListener('click', startFn)

//     timeSet = setInterval(function () {
//         localStorage.setItem('color', colors[count]);
//         if (count < (colors.length - 1)) {
//             count++;
//         } else {
//             count = 0;
//         }
//         setColor();
//     }, 1000)
// }

// function stopFn() {
//     stopButton.style.display = 'none';
//     startButton.classList.toggle('disabled');
//     startButton.disabled = !startButton.disabled;
//     startButton.addEventListener('click', startFn)
//     clearInterval(timeSet);
// }

// function setColor() {
//     const theme = localStorage.getItem('color');
//     body.style.backgroundColor = theme;
// }

// startButton.addEventListener('click', startFn)
// stopButton.addEventListener('click', stopFn)

//=================task03============================