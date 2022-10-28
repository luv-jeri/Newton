// # Today Date - 28/10/2022
// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// console.log('Person.prototype', Person.prototype);

// const john = new Person('John', 30);
// const jane = new Person('Jane', 25);

// console.log(john)
// console.log(john.name);
// console.log(john.age);
// console.log('[[Prototype]]', john.__proto__);

// Application Show Room
// const Users = function (name, address, car) {
//   this.name = name;
//   this.address = address;
//   this.car = car;
// };

// Users.prototype.country = 'India';
// Users.prototype.type = 'User';
// Users.prototype.payment = function () {
//   // ASK FOR PAYMENT
//   console.log('Payment is done');
// };
// Users.prototype.notify = function () {
//   // NOTIFY USER
//   console.log('NOTIFY USER');
// };

// const u1 = new Users('John', 'Delhi', 'BMW');
// const u2 = new Users('Jane', 'Mumbai', 'Audi');
// const u3 = new Users('Jack', 'Bangalore', 'Maruti');
// console.log(u1);

// console.log(u1.__proto__.type);
// u1.__proto__.payment();
// u1.__proto__.notify();

// const arr = [1, 2, 4];
// arr.__proto__.push = function () {
//   console.log('Push is not allowed');
// };
// arr.push(6);
