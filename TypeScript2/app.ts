const anchor = document.querySelector("a")!;

// console.log(anchor.href); // There is warning while accessing anchor property
// ! is added to define that it will always return a definite value and not null.

// if (anchor) {
//   console.log(anchor.href);
// }

console.log(anchor.href);

/* Another cool things of using typescript for DOM interaction is that it automatically contains special types for every DOM element */

// form
const form = document.querySelector("form")!;
const form1 = document.querySelector(".new-item-form") as HTMLFormElement; // HTMLFormElement is used when we are using css or id to access the element
console.log(form1.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form1.add("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
