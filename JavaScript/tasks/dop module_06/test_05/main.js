/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
