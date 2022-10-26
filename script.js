class Vehicle {
  constructor(para_name, para_modal) {
    this.name = para_name;
    this.type = 'car';
    this.model = para_modal;
  }
}

const car1 = new Vehicle('Honda', 'Civic');
const car2 = new Vehicle('Toyota', 'Corolla');

console.log(car1);
console.log(car2);
