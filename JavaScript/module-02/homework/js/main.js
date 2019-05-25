'use strict';

// ⚠️ОСНОВНОЕ ЗАДАНИЕ!

// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';

// const userCancel = 'Отменено пользователем!';
// const  inValideLogin = 'Доступ запрещен, неверный логин!';
// const  inValidePassword = 'Доступ запрещен, неверный пароль!';

// let login = prompt('Введите логин');
// let password;

// if (login === null) {
//     alert(userCancel);
// } else if (login === adminLogin) {
//     password = prompt('Введите пароль');
//     if (password === null) {
//         alert(userCancel);
//     } else if (password === adminPassword) {
//         alert('Добро пожаловать!');
//     } else {
//         alert(inValidePassword);
//     }
// } else {
//     alert(inValideLogin);
// }


//⚠️ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ!

const adminLogin = 'admin';
const adminPassword = 'admin';

let userLogin;
let userPassword;

let groupTaba = 6;
let groupSharm = 15;
let groupHurgada = 25;

console.log('Мест в группе \"Taba\":', groupTaba);
console.log('Мест в группе \"Sharm\":', groupSharm);
console.log('Мест в группе \"Hurgada\":', groupHurgada);

let groupValue = confirm('Хотите изменить количестно мест в группах?!(требуется пароль администратора)');

if (groupValue) {
    userLogin = prompt('Введите логин!', 'admin');
    if (userLogin === adminLogin) {
        userPassword = prompt('Введите пароль!', 'admin');
        if (userPassword === adminPassword) {
            groupTaba = Number(prompt('Введите количество мест в группе \"Taba\"','6'));
            groupSharm = Number(prompt('Введите количество мест в группе \"Sharm\"','15'));
            groupHurgada = Number(prompt('Введите количество мест в группе \"Hurgada\"','25'));
        } else {
            alert('Неверный пароль');
        }
    } else {
        alert('Неверный логин');
    }
} else {
    alert('Места в группе без изменений! Продолжим?');
}

console.clear();  
console.log('Мест в группе \"Taba\":', groupTaba);
console.log('Мест в группе \"Sharm\":', groupSharm);
console.log('Мест в группе \"Hurgada\":', groupHurgada);

let userSeats = prompt('Введите количество необходимых мест!');
let seats = Number(userSeats);

let groupChoise = 0;
let userDecision;

if (userSeats === null) {
    alert('Нам очень жаль, приходите еще!');
} else if (Number.isNaN(seats) || !Number.isInteger(seats) || /*Math.sign(seats) || */ seats <= 0) {
    alert('Ошибка ввода!');
} else {
    if (seats <= groupTaba) {
       groupChoise = 'Taba';
    } else if (seats <= groupSharm) {
        groupChoise = 'Sharm';
    } else if (seats <= groupHurgada) {
        groupChoise = 'Hurgada';
    } else {
        alert('Извините, столько мест нет ни в одной группе!');
    }
}

if (groupChoise !== 0) {
    userDecision = confirm(`Есть место в группе: "${groupChoise}". Согласны ли Вы быть в этой группе`)
    if (userDecision) {
        alert(`Приятного путешествия в группе "${groupChoise}".`);
    } else {
        alert(`Нам очень жаль, что группа "${groupChoise}". Вам не подошла. Приходите еще!`);
    }
}