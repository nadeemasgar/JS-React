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
