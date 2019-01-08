const suri = {
  name: 'Surendra',
  Age: 25
};

suri.name = 'kiran';
console.log(suri);
//----------------------------------------

const nums = [1, 2, 3, 4, 5];
nums.push(6);
console.log(nums);
//---------------------------------------------

//Arrow Functions

function sayHello() {
  console.log('hello');
}
sayHello();
//-------------------------------------------

const sayHelloSuri = name => {
  console.log('helloSuri' + name);
  console.log(`hello ${name}`);
};
sayHelloSuri('Krishna');

//------------------------------------------------

const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];
//ForEach
fruits.forEach((fruits, index) => {
  console.log(fruits);
});

//----------------------------------------------
//Map

const suriFruits = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(suriFruits);

//---------------------------------------------------
//Filter

const peoples = [
  { id: 1, name: 'siddu' },
  { id: 2, name: 'ramana' },
  { id: 3, name: 'ram' }
];

const peoples2 = peoples.filter(person => person.id !== 2);
console.log(peoples2);
//---------------------------------------------------------
//Spread
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7];
const arr3 = [arr, 8];
console.log(arr2);
console.log(arr3);

const man = {
  name: 'BalaChandra',
  age: 30
};

const newMan = {
  ...man,
  email: 'Bala@gmail.com'
};

console.log(newMan);

//--------------------------------------------------------------

//Combination of Spread and filter

const array = [1, 2, 3, 4, 5];
const array2 = [...array.filter(number => number !== 3)];
console.log(array2);

//---------------------------------------------------------

//Destructing
const profile = {
  name: 'Subbarayudu',
  address: {
    street: 'suri bajar',
    village: 'sangapatnam'
  },
  hobbies: ['chess', 'cricket']
};
console.log(profile);

const { name, address, hobbies } = profile;
console.log(name, address.street, hobbies[1]);

const { street } = profile.address;
console.log(street);

//----------------------------------------------------------
//Classes

class Person {
  constructor() {
    console.log('raavana');
  }
}

const Person2 = new Person();

// --------------------------------------------
class Person3 {
  constructor() {
    this.name = 'lanka';
  }
}

const Person4 = new Person3();
console.log(Person4.name);
// -----------------------create a properties using a class------------------------------

class Person5 {
  constructor(name) {
    this.name = name;
  }
}

const Person6 = new Person5('bhargav');
const Person7 = new Person5('naagendra');

console.log(Person6.name);
console.log(Person7.name);
// -----------------------------create a properties using a class------------------------

class Person8 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person9 = new Person8('Arpan', 25);

console.log(person9.name);
console.log(person9.age);
// -----------------------------create method using a class------------------------

class Person10 {
  constructor(phno, email) {
    this.phno = phno;
    this.email = email;
  }

  greet() {
    return `hello this is my phone number${this.phno} and my email is ${
      this.email
    }`;
  }
}
const person11 = new Person10(9010333276, 'Suri@gmail.com');
const person12 = new Person10(9666905895, 'Subbu@gmail.com');

console.log(person11.greet());

//----------------------------------------------------------

//SUB CLasses

class Person14 extends Person8 {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
}
const person15 = new Person14('ramojirao', 80, 30000);
console.log(person15.name);
// ----------------------------with method using subclass-------------

class Person14 extends Person8 {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  info() {
    return `${this.name} ows ${this.balance}`;
  }
}
const person15 = new Person14('ramojirao', 80, 30000);
console.log(person15.info());

//---------------------------------------------------

//Modules

//file1  (file1.js)
export const name = 'vinay';
export const age = 23;
export const nums = [10, 3, 22, 89];
export default SuriClass;

//file2 (file2.js)
import { name, age, nums } from './file1';
import SuriClass from './file2';
