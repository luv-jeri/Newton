// const obj = {
//   name: 'John',
//   sayHello: function () {
//     console.log(this);
//   },
// };

// obj.sayHello(); //* {name: "John", sayHello: ƒ}
// console.log(this);
// const obj = {
//   name: 'John',
//   sayHello: () => {
//     const say = () => {
//       console.log(this);
//     };

//     say();
//   },
// };

// obj.sayHello();

const name = 'Rajesh';

const person = (name) => {
  return {
    name: name,
    sayHello: () => {
      console.log(this);
      console.log(` -->> ${this.name}`);
    },
  };
};

const sanjay = person('Sanjay');
sanjay.sayHello();
