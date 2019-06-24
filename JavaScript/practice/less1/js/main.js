'use strict';
//Вывод окна с текстом
// alert('first script');

//Запись в документ текста
// document.write('script write ');

//Массив с цветом
// let colorArray = ['#191919', '#292929', '#393939', '#494949', '#595959', '#696969', '#797979', '#898989', '#999'];
// let i = 0;
//Функция перебора индекса массива по нажитию кнопки
//Замена фона Body
// function chengeColor() {
//     document.body.style.background = colorArray[i];
//     i ++;
//     if (i > colorArray.length - 1) {
//         i = 0;
//     }
// }

//js7
//Переменные
// let number = 10;
// let str = 'JavaScript';
// let bool = true;

// document.write(number + ' ', str + ' ', bool + '' );

// alert('Number: ' + number + ' String: ' + str + ' Boolean: ' + bool);

//js8
// //Math operation
// let name = prompt('Введите Ваше имя','');
// let old = prompt('Сколько Вам лет?','');
// let years = 2019;

// alert(`${name}, Ваш год рождения: ${years-old}`);

//js9
//Comby
// function createLink(){

//     let link = prompt('Введите адресс ссылки');
//     let text = prompt('Введите текст якоря');
//     let result = `Ваша ссылка: <a href="http://${link}"> ${text }<a><br>`;
//     result += `Код ссылки: http://${link}`;
    
//     let paragr = document.getElementsByTagName('p')[0];
//     paragr.innerHTML = (result);

//     console.log('object :', paragr);
// }

// task
// function persent() {
//     let rub = 'rub',
//         number = prompt('Введите кол-во рублей'),
//         per = prompt('Введите нужный процент'),

//         result = per*number/100;

//         alert(`от ${number} ${rub}, ${per} процентов совтавляет = ${result}${rub}`);
// }

//js10
//array
