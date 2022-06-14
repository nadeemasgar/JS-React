/* 1. Types Basic */
var character = "mario";
var age = 30;
var isBlackBelt = false;
// character = 20;   // Variable can not be reassigned to other value
character = "luigi";
// age = "yoshi"
age = 40;
// isBlackBelt = "yes";
isBlackBelt = true;
// In typeScript, we can define the type of arguments we are passing in the function
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
/* 2. Objects & Arrays */
// arrays
var names = ["luigi", "yoshi", "yoshi"];
names.push("toad");
// names.push(3); // You can not insert a number into a arrays already containing String value
// names[0] = 3   // You can not reassign a value into a arrays already with different types
// Mixed Arrays
var mixed = ["ken", 4, "chun-li", 8, 9]; // Array containing string and number
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
// Objects
var ninja = {
    name: "mario",
    belt: "black",
    age: 30
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
var student_Name;
var student_age;
var isLoggedIn;
// age = "luigi"  // Its wrong
age = 20;
isLoggedIn = false;
// - For Arrays
var ninjas;
// ninjas.push("shaun"); // You can use push method before defining it as arrays
ninjas = ["nadeem", "asgar"];
var array2 = [];
ninjas.push("shaun");
// - union types -> for creating mixed array & for normal variable containing boolean, number, string
var mixedArray = [];
mixedArray.push("hello");
mixedArray.push(2);
// mixedArray.push(false); // This is wrong
var uid;
uid = "123";
uid = 123;
// - objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = []; // This is allowed as array is also an object
var ninjaTwo;
ninjaTwo = { name: "mario", age: 20, beltColour: "black" };
// This is how we explicitly type our variable before we give then a value
/* 4. Dynamic (any) Types */
var man_age = 25;
man_age = true;
man_age = "hello";
man_age = { name: "luigi" };
var mixed1 = [];
mixed1.push(5);
mixed1.push("mario");
mixed1.push(false);
var obj;
obj = { name: "yoshi", age: 25 };
obj = { name: 25, age: "yoshi" };
// tsc --init -> to initialize the tsconfig.json file
// tsc filename -> to convert typescript into javaScript
/* 5. Function Basics */
var greet = function () {
    console.log("hello, world");
};
// greet = "hello"; // This is an error
var greet1;
greet = function () {
    console.log("hello, again");
};
var add = function (a, b) {
    console.log(a + b);
};
add(5, 10);
var add1 = function (a, b, c) {
    // passing optional Parameter
    console.log(a + b);
};
add1(5, 10);
var add2 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    // Setting a default value while passing optional parameter. So ? marked is not needed when we set the default values
    // Always put default and optional parameter at the end of the parameters
    console.log(a + b);
};
add2(5, 10, "20");
// when a function return a value
var minus = function (a, b) {
    // (): number is used to represent the return type
    return a - b;
};
var result = minus(10, 5);
var minus1 = function (a, b) {
    // (): void is used to represent the return type
    console.log(a - b);
};
minus1(10, 5);
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet2 = function (user) {
    console.log("".concat(user.name, " says hello"));
};
