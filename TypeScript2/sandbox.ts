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

/* 3. Explicit Types */

// - For Variables
let student_Name: string;
let student_age: number;
let isLoggedIn: boolean;

// age = "luigi"  // Its wrong
age = 20;
isLoggedIn = false;

// - For Arrays
let ninjas: string[];

// ninjas.push("shaun"); // You can use push method before defining it as arrays
ninjas = ["nadeem", "asgar"];

let array2: string[] = [];
ninjas.push("shaun");

// - union types -> for creating mixed array & for normal variable containing boolean, number, string
let mixedArray: (string | number)[] = [];
mixedArray.push("hello");
mixedArray.push(2);
// mixedArray.push(false); // This is wrong

let uid: string | number;
uid = "123";
uid = 123;

// - objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = []; // This is allowed as array is also an object

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = { name: "mario", age: 20, beltColour: "black" };
// This is how we explicitly type our variable before we give then a value

/* 4. Dynamic (any) Types */

let man_age: any = 25;
man_age = true;
man_age = "hello";
man_age = { name: "luigi" };

let mixed1: any[] = [];
mixed1.push(5);
mixed1.push("mario");
mixed1.push(false);

let obj: { name: any; age: any };
obj = { name: "yoshi", age: 25 };
obj = { name: 25, age: "yoshi" };

// tsc --init -> to initialize the tsconfig.json file
// tsc filename -> to convert typescript into javaScript

/* 5. Function Basics */

let greet = () => {
  console.log("hello, world");
};

// greet = "hello"; // This is an error

let greet1: Function;

greet = () => {
  console.log("hello, again");
};

const add = (a: number, b: number) => {
  console.log(a + b);
};

add(5, 10);

let add1 = (a: number, b: number, c?: number | string) => {
  // passing optional Parameter
  console.log(a + b);
};

add1(5, 10);

let add2 = (a: number, b: number, c: number | string = 10) => {
  // Setting a default value while passing optional parameter. So ? marked is not needed when we set the default values
  // Always put default and optional parameter at the end of the parameters
  console.log(a + b);
};

add2(5, 10, "20");

// when a function return a value
const minus = (a: number, b: number): number => {
  // (): number is used to represent the return type
  return a - b;
};

let result = minus(10, 5);

const minus1 = (a: number, b: number): void => {
  // (): void is used to represent the return type
  console.log(a - b);
};

minus1(10, 5);

/* 6. Type Aliases */
// Sometimes, the type specification of the parameter in function becomes quite long

/* const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet2 = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} says hello`);
}; */

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet2 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

/* 7. Function Signature */

let gree: (a: string, b: string) => void;
gree = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

let logDetails1: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails1 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
