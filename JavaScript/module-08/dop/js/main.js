'use strict';

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

//=============task 02========
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = document.querySelector('.list');

// const firstList = list.firstElementChild;
// const lastList = list.lastElementChild;

// console.log('firstList :', firstList);
// console.log('lastList :', lastList);

// firstList.classList.add('first');
// lastList.classList.add('last');

// firstList.style.color = 'red';
// lastList.style.color = 'blue';



//==================task03==================
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const list = document.querySelector('.list');

// const arr = elements.map(el => `<li>${el}<li>`);

// // list.innerHTML = arr;

// for (let key of arr) {
//     list.insertAdjacentHTML('beforeend', key);
// }



//====================task04================
/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];

//   const gallery = document.querySelector('.gallery');

//   const addElements = (node, gallery) => gallery.forEach(({url, alt}) => {
//       const li = document.createElement('li');
//       li.innerHTML = `<img src=${url} alt='${alt}'/>`
//       return node.append(li)
//     })

//   addElements(gallery, galleryItems);


//==================task05==================
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// const filter = document.querySelectorAll('input');

// function collectInputData(inputs) {
//     const sizes = [];
//     // console.log('inputs :', inputs);
//     inputs.forEach(el => el.hasAttribute('checked') ? sizes.push(el.value) : false);

//     return sizes;
// }

// console.log(collectInputData(filter));


//========================task06===============
/*
Создайте функцию createMovieCard(), которая 
создает и возвращает DOM-узел карточки кинофильма.

Разметка с классами есть на вкладке HTML.
Стили на вкладке CSS.

Используйте createElement для создания узлов.
Добавьте классы и атрибуты.
*/

// function createMovieCard() {

// }




//========================task07===============
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
  const createDiv = function(width){
    const divRes = document.createElement("div");
    divRes.style.backgroundColor = "rgb("+getRandomInt(0,255)+","+getRandomInt(0,255) +","+getRandomInt(0,255)+")";
    divRes.style.width = width+"px";
    divRes.style.height = width+"px";
    return divRes;
  };
  
  
  
  function createBoxes(num){
    let width = 30;
    const divMain =  document.createElement("div");
    
    for(let i = 0; i < num; i++){    
        const divCr = createDiv(width);
        divMain.append(divCr);
        width+=10;
    }
    return divMain;
  };
  
  const root = document.querySelector("#root");
  root.append(createBoxes(10));


  /*const body = document.querySelector('#root');

const createBoxes = (num) => {
  let color = 'red';
  let size = 30;
  let arr = [];
  for (let i = 1; i <= num; i++) {
    size += 10;
    color = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;
    let box = `<div class='box' style='width:${size}px; height:${size}px; background-color:${color}'></div>`;
    arr.push(box);
  }
  return body.insertAdjacentHTML('beforeend', arr.join(' '));
}

createBoxes(8);*/

