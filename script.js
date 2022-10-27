// #new keyword
// * new keyword id going to create a blank object for us
// * it will change the this keyword poniter to the new object
// * it is going to make variable points to the new object

// function Vehilce(name, company, year) {
//   this.name = name;
//   this.company = company;
//   this.year = year;
// }

// const car1 = new Vehilce('Civic', 'Honda', 2019);
// const car2 = new Vehilce('Accord', 'Honda', 2019);

// console.log('car1', car1);
// console.log('car2', car2);

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  this.sayHello = function () {
    console.log('Hello', this.name);
  };

  this.showDetails = function () {
    console.log('Name', this.name);
    console.log('Age', this.age);
    console.log('Job', this.job);
  };
}

const sanjay = new Person('Sanjay', 23, 'Developer');
const rahul = new Person('Rahul', 24, 'Developer');
const ravi = new Person('Ravi', 25, 'Developer');

console.log('sanjay', sanjay);
console.log('rahul', rahul);
console.log('ravi', ravi);
