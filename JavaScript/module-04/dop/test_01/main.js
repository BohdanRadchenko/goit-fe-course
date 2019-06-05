"user strict";

//COMPLETED

/*    Напиши скрипт, который, для объекта user, последовательно: 
      - добавляет поле mood со значением 'happy'
      - заменяет значение hobby на 'javascript'
      - заменяет значение premium на false


      - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
      
      - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of */

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "javascript";
user.premium = false;
console.log("user :", user);

console.log("Object.keys(user) :", Object.keys(user));

console.log('//============ :');
const keys = Object.keys(user);
for (let key of keys) {
  console.log(key, ':', user[key]);
}

console.log('//============ :');
for (let key in user) {
  // console.log("key :", key);
  // console.log('user[key] :', user[key]);
  console.log(key,':', user[key]);
}

console.log('//============ :');
// console.log("Object.entries(user) :", Object.entries(user));
const entArr = Object.entries(user);
for (let k of entArr) {
  let key = k[0];
  let value = k[1];
  console.log(key, ":", value);
}
