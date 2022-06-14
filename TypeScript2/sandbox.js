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
