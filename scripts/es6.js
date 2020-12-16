/*
FOUR PILLARS OF OBJECT ORIENTED PROGRAMMING
  
  - Encapsulation: Combining like properties and method into a single unit (Class object)
  
  - Abstraction: Hiding inner workings, or only exposing specific tools to interface with

  - Inheritance: The ability of objects to share properties and methods (behaviors)

  - Polymorphism: (Many Shapes) Children can inherit functionality/properties and also define/redefine their own

TWO MAIN APPROACHES TO OOP
  - Inheritance
  - Composition

*/



// ES6 Class Syntax
// This is just syntactical sugar

class Person {
  constructor(providedName, providedEmail='none provided') {
    this.name = providedName;
    // this.email = providedEmail || 'none provided';
    this.email = providedEmail;
    this.isAdmin = null;
  }

  describeSelf() {
    console.log(`
    My name is ${this.name}.
    My email is ${this.email}.
    My favorite is ${this.favColor}.
  `)
  }
}

const john = new Person('John Doe', 'jdoe@gmail', false);

const sarah = new Person('Sarah Jones')

// console.log(john);
// console.log(sarah);

john.isAdmin = true;
// console.log(john);





// ========================================

// Super Class
class Vehicle {
  static count = 1;

  constructor(type='car') {
    this.numOfWheels = 4;
    this.vinNumber = Vehicle.count;
    this.type = type;
    Vehicle.count++;
  }

  // Instance Method
  describeSelf() {
    return `
      Vehicle Type = ${this.type}.
      Number of Wheels = ${this.numOfWheels}.
      VIN = ${this.vinNumber}
    `;
  }

  // Static Method (only available to the class)
  static returnCount() {

  }
}


// Sub Class Car
class Car extends Vehicle {
  constructor(type, trunkSize='standard') {
    super(type); // calls the parent constructor
    this.trunkSize = trunkSize;
  }

  describeSelf() {
    return `
      I am a Car!
      Vehicle Type = ${this.type}.
      Number of Wheels = ${this.numOfWheels}.
      VIN = ${this.vinNumber}
    `;
  }
}

const car = new Car('sports car');
console.log(car.describeSelf());










// Sub Class Truck
class Truck extends Vehicle {
  static count = 0; // Class Property
  
  constructor(type, bedSize) {
    super(type, date); // calls the parent constructor
    this.bedSize = bedSize; // instance property
  }

  // Instance Method
  describeSelf() {

  }

  static returnCount() {
    return Truck.count;
  }
}

const truck = new Truck('Truck', 'Long Bed');
console.log(truck.describeSelf());




















// function Test(configObj) {
//   // console.log(arg1)
//   // console.log(arg2)
//   // console.log(arg3)

//   this.arg2 = configObj.arg2;
//   this.arg1 = configObj.arg1;
//   this.arg3 = configObj.arg3;
// }

// const config = {
//   arg3: 'Val3',
//   arg2: 'Val2',
//   arg1: 'Val1',
// }

// const testObj = new Test(config);
// console.log(testObj);
