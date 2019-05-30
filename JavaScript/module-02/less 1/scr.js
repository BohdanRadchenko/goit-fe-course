const users = ["Mango", "Poly", "Ajax", "Chelsey"];

const userToDelete = "Ajax";
console.log(users.splice((users.indexOf(userToDelete)), 1));
console.log('users :', users);