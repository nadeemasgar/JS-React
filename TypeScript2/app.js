var anchor = document.querySelector("a");
// console.log(anchor.href); // There is warning while accessing anchor property
// ! is added to define that it will always return a definite value and not null.
// if (anchor) {
//   console.log(anchor.href);
// }
console.log(anchor.href);
/* Another cool things of using typescript for DOM interaction is that it automatically contains special types for every DOM element */
// form
var form = document.querySelector("form");
var form1 = document.querySelector(".new-item-form"); // HTMLFormElement is used when we are using css or id to access the element
console.log(form1.children);
// inputs
var type = document.querySelector("#type");
var toform = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form1.add("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
