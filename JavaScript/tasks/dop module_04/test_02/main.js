'use strict';
//COMPLETED
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const keys = Object.keys(tasksCompleted);
console.log('keys :', keys);
console.log('//============================');

let max = tasksCompleted[keys[0]];
console.log('max :', max);
console.log('//============================');

let maxKey = keys[0];
console.log('maxKey :', maxKey);
console.log('//============================');

for (let key of keys) {
  console.log('key :', key);
  if(tasksCompleted[key] > max){
    max = tasksCompleted[key];
    maxKey = key;
  }
}
console.log('//============================');

console.log('max :', max);
console.log('maxKey :', maxKey);
console.log('//============================');

console.log(`${maxKey} : ${max}`);