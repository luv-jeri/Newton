// # Factory function is a way to create object which are some "almost same"
// # like a template
// # It just returns a object, that all
// # we can pass the values for the object as the arguments

// # Factory function
// function person(person_name) {
//   return {
//     name: person_name,
//     sayHello: function () {
//       console.log(this)
//       console.log(`hello ${this.name}`);
//     },
//   };
// }

// const sanjay = person('Sanjay');
// const martin = person('Martin');

// sanjay.sayHello();

// const Vehicle = (type, name, wheels, company, seater) => {
//   return {
//     type: type,
//     name: name,
//     wheels: wheels,
//     company: company,
//     seater: seater,

//     // # Method
//     getDetails: function () {
//       console.log(`
//       this is a  ${type} and it have ${wheels} wheels you can take ${seater} peps in it and the name is ${name}
//       `);
//     },
//     drive: function () {
//       console.log('Driving');
//     },
//   };
// };

// const civic = Vehicle('car', 'civic', 4, 'honda', 5);
// const pulsar = Vehicle('bike', 'pulsar', 2, 'bajaj', 2);
// const mustang = Vehicle('car', 'mustang', 4, 'ford', 5);

// civic.getDetails()
// pulsar.getDetails()

// function Car(name, modal, year) {
//   return {
//     name: name,
//     modal: modal,
//     year: year,

//     showDetails: function () {
//       console.log(`This ${this.name} from ${this.year} and the modal is ${this.modal}`);
//     },
//   };
// }

// const car1 = Car('Honda', 'Civic', 2019);

// car1.showDetails();

// car1.year = 2020;
// car1.showDetails();

// function Person(name, age) {
//   const object = {
//     name: name,
//     age: age,
//     sayHello: function () {
//       console.log(`Hello ${this.name}`);
//     },
//     walk: function () {
//       console.log('waling...');
//     },
//   };

//   return object;
// }

// const person1 = Person('Sanjay', 23);
// const person2 = Person('Martin', 24);
// const person3 = Person('John', 25);

// console.log('person2', person2);
// console.log('person3', person3);
// console.log('person1', person1);

// ! Always use regular function to create a factory function

// function Person() {
//   return {};
// }

// const Person = function () {
//   return {};
// };

const Person = () => {
  console.log(this);
};
