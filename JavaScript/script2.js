// Es-6 Feature

// *** Template String ***
var username = "tim";
console.log("Hello my name is " + username);
console.log(`Hello my name is ${username}`);

// *** Default argument ***
function add(x, y = 5) {
  return x + y;
}

console.log(add(4, 0));

// *** rest and spread operator ***
function Add(...values) {
  // Rest operator
  console.log(values);
}

Add(2, 3, 4);

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

let arr3 = [...arr1, ...arr2]; // Spread operator

// *** Arrow function ***
let numbers = [1, 2, 3, 4, 5];

let numbers2 = numbers.map(function (number) {
  return number * 2;
});

let numbers3 = numbers.map((number) => {
  return number * 2;
});

let numbers4 = numbers.map((numbers) => {
  return number * 2;
});

numbers.map((number) => number * 2);
// Use arrow function inside the setTimeout function

// *** ES6 Destructuring ***
const number6 = [5, 10];
const [n1, n2] = number6;
console.log(n1, n2);

var person = {
  name: "shorty",
  age: 14,
};

var { name, age } = person;
//  var { name: pname, age: page } = person;

// *** Modules Syntax ***
import React from "react";

/* 
var React = require("react");
module.exports = React
 */

// *** ES6 Classes ***
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

var p1 = new Person("Hank");
p1.sayName();

console.log(p1.__proto__ === Person.prototype); // It points to the function that created it.

var sayName = p1.sayName.bind(p1);
sayName();


// *** Promises ***


// *** fetch ***


