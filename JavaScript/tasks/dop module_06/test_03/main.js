'use strict';

//COMPLETED
/*
 * Напиши класс Car с указанными свойствами и методами
 */
class Car {
  constructor({
    maxSpeed = 0,
    price,
  }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this._price = price;
  }

  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = true;
  }

  accelerate(spd) {
    if (spd <= this.maxSpeed) {
      this.speed = spd;
    }
  }

  decelerate(spd) {
    if (spd <= this.maxSpeed && spd >= 0) {
      this.speed = spd;
    }
  }

  drive(hours) {
    if (this.running) {
      this.distance = hours * this.speed;
    }
  }

  static getSpecs(car) {
    console.log('car.maxSpeed :', car.maxSpeed);
    console.log('car.speed :', car.speed);
    console.log('car.running :', car.running);
    console.log('car.distance :', car.distance);
  }
  get price() {
    return this._price;
  }
  
  set price(value) {
    this._price = value;
    
  }
};

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100


const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.price); // 2000

car.price = 4000;
console.log(car.price); // 4000