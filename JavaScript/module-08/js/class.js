'use strict';

// document.querySelectorAll('.inner-item')
// console.log('object :', document.querySelectorAll('.inner-item'));

// document.getElementsByClassName('container');
// console.log(document.getElementsByClassName('container'));

// const container = document.getElementsByClassName('container');

// console.log('container :', container);

// const li = document.querySelectorAll('.inner-item');

// const arr = Array.from(li);

// console.log('arr :', arr);



//=================================================================
// const galleryItems = [{
//         url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "White and Black Long Fur Cat"
//     },
//     {
//         url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//         url: "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//         url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "Group of Horses Running"
//     },
//     {
//         url: "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "Macaw Birds"
//     },
//     {
//         url: "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         alt: "2 Lion on Grass Field during Daytime"
//     }
// ];

// const container = document.querySelector('.container');
// const innerBox = document.querySelector('.inner-box');
// const list = document.querySelector('li');

// container.classList.add('background');


// console.log('list :', list);
// console.log('container :', container);
// console.log('innerBox :', innerBox);

// container.style.width = '100vw';

// const arr = galleryItems.map(images => `<li><img class = "box" src="${images.url}" alt=""> <p>${images.alt}</p></li>`);
// console.log('arr :', arr);

// innerBox.innerHTML = arr;

// const test = innerBox.children;
// console.log('test :', test);

// const arrLi = Array.from(test);
// console.log('arrLi :', arrLi);


// arrLi.map(el => el.classList.add('newStyle'));
// console.log('newArr :', arrLi);


// const boxChildren = innerBox.children;
// console.log('boxChildren :', boxChildren);

// const boxChildrenArray  = Array.from(boxChildren);
// console.log('boxChildrenArray :', boxChildrenArray);

// const boxClass = boxChildrenArray.map(el => el.classList.add('boxClass'));



//============================
// const body = document.body;
// const container = document.createElement('div');

// container.classList.add('container');

// body.prepend(container);

// const innerContainer = document.createElement('div');

// container.prepend(innerContainer);

// innerContainer.classList.add('inner');

// console.log('innerContainer :', innerContainer);

