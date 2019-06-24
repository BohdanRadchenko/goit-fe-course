'user strict'
/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Была нажата отмена!'.
  - Если что-то другое — показывать alert с сообщением 'Неверный пароль, активирована система защиты!'
*/ 

const correctPassword = 'jqueryismyjam';

const userPassword = prompt('Введите пароль доступа');

console.log(userPassword);

// if (userPassword === correctPassword) {
//     alert ('Доступ в секретный бункер разрешен!')
// } else if (userPassword === null){
//     alert ('Была нажата отмена!')
// } else {
//     alert ('Неверный пароль, активирована система защиты!')
// }

switch (userPassword) {
    case correctPassword: 
    alert ('Доступ в секретный бункер разрешен!');
    break;

    case null: 
    alert ('Была нажата отмена!');
    break;

    default:
    alert ('Неверный пароль, активирована система защиты!');
}