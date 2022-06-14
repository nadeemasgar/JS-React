/* 1. Types Basic */

let character = "mario";
let age = 30;
let isBlackBelt = false;

// character = 20;   // Variable can not be reassigned to other value
character = "luigi";

// age = "yoshi"
age = 40;

// isBlackBelt = "yes";
isBlackBelt = true;

// In typeScript, we can define the type of arguments we are passing in the function
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));

/* 2. Objects & Arrays */

// arrays
let names = ["luigi", "yoshi", "yoshi"];

names.push("toad");
// names.push(3); // You can not insert a number into a arrays already containing String value
// names[0] = 3   // You can not reassign a value into a arrays already with different types

// Mixed Arrays
let mixed = ["ken", 4, "chun-li", 8, 9]; // Array containing string and number
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;

// Objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "ryu";
// ninja.age = "30"
// ninja.skills = ["fighting", "sneaking"]; // When we define the object, we cannot add additional property to it

// You can rewrite the complete object but it should have the same property as already defined above
/* ninja = {   // This is wrong as age property is missing in the object and does not match with the initial structure of the object
  name: "yoshi",
  belt: "orange",
}; */

// ninja = {  // This is also wrong
//   name: 20,
//   belt: "black",
//   age: 30,
// };