/*
 * Ознакомься с содержанием панелей HTML и CSS.
 * 
 * Напиши скрипт который сохраняет выбранную пользователем 
 * тему в localStorage и, при следующих посещениях страницы, 
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 * 
 * При выборе темы, добавляй на элемент body соответствующий класс. 
 */

const body = document.querySelector('body');
console.log('body :', body);

let theme = localStorage.getItem('theme');
body.className = theme;

const buttonLight = document.querySelector("button[data-theme='light']");
const buttonDark = document.querySelector("button[data-theme='dark']");

function ligthTheme() {
    localStorage.setItem('theme', 'theme-light');
    setTheme()
}

function darkTheme () {
    localStorage.setItem('theme', 'theme-dark');
    setTheme()
}

function setTheme() {
    theme = localStorage.getItem('theme');
    body.className = theme;
}

buttonLight.addEventListener("click", ligthTheme);
buttonDark.addEventListener("click", darkTheme);