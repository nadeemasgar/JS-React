/* 1. DOM & Type Casting */
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
form1.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
/*  2. Classes */
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the luigi website", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
/* 3. Puble, Private, Readonly */
var test = /** @class */ (function () {
    //   readonly name: string;
    //   private age: number;
    //   public gender: string;
    function test(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    test.prototype.display = function () {
        return "".concat(this.name, " is of ").concat(this.age, " age and of gender ").concat(this.gender);
    };
    return test;
}());
var man1 = new test("rahul", 30, "male");
console.log(man1);
var me = {
    name: "shaun",
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent ", amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log("hello ", person.name);
};
greetPerson(me);
console.log(me);
