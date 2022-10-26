// # "this keyword" is like a pointer
// # every function will have its own "this keyword"
// # In the case of regular function it will point to the object that is calling the function
// ! KEEP IN MIND only for the regular function i.e. function create using the "function keyword"
// ! not arrow function ( here story is diffrent )

const obj = {
  name: 'John',
  sayHello: function () {
    console.log(this);
  },
};

obj.sayHello();
