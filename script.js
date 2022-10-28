// # HOW WE CAN CREATE OBJECT
// # 1. Object Literal
const obj = { name: 'Sanjay' };

// # 2. Factory Function
const createPerson = (name, age) => {
  return {
    name,
    age,
    sayHello: function () {
      console.log(`Hello ${this.name}`);
    },
  };
};
const p1 = createPerson('Sanjay', 25);
const p2 = createPerson('Raj', 26);
p1.sayHello();

// # 3. Constructor Function
const Vehicle = function ({
  name = 'Vehilce',
  color = 'Default Color',
  model = 'Random Model',
  price = '000000',
}) {
  this.name = name;
  this.color = color;
  this.model = model;
  this.price = price;

  this.getDetails = function () {
    console.log(
      `Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, Price: ${this.price}`
    );
  };
};

const v1 = new Vehicle({
  name: 'BMW',
  color: 'Black',
  model: 'X5',
  price: undefined,
});



