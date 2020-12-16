// ES5 Protypal Inheritance

// No Arrow Functions
// const Person = () => {};

// Classes create objects
// Often refer classes as a Blueprint
function Person(name, email) {
  // Constructor function adds properties to
  // the object created by the "new" keyword
  this.name = name;
  this.email = email;
  this.isAdmin = false;
  this.favColor = 'blue';

  // This will create a copy of describeSelf on each person: bad
  // this.describeSelf = function () {
  //   console.log(`
  //     My name is ${this.name}.
  //     My email is ${email}.
  //     My favorite is ${this.favColor}.
  //   `)
  // }
}

Person.prototype.describeSelf = function () {
  console.log(`
    My name is ${this.name}.
    My email is ${this.email}.
    My favorite is ${this.favColor}.
  `)
}

Person.prototype.changeName = function (newName) {
  this.name = newName;
}

// CREATE PERSON INSTANCES
// Intantiate the Person Class
const john = new Person('John', 'jdoe@gmail.com'); // new tells Person function to create a new object
const sarah = new Person('Sarah', 'sdoe@gmail.com');
const kevin = new Person('Kevin', 'kdoe@gmail.com');

console.log(john);
console.log(sarah);
console.log(kevin);


console.log('=================================');

// No consistent properties
// console.log({firstName: 'Steve'});
// console.log({fullname: 'Jessica Parker'});

sarah.describeSelf();
