var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Invoice1 = /** @class */ (function () {
    function Invoice1(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice1.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice1;
}());
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " owed $").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
var docOne;
var docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("luigi", "plumbing work", 200);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
/* 6. Generics */
// Generics allows us to create reusable blocks of code which can be used with different types
/*
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docThree = addUID({ name: "yoshi", age: 40 });

console.log(docThree);
// docThree.name gives the error as the property name does not exist on this type.
// It happens because we are not specifying exactly what this object should be.
 */
var addUID = function (obj) {
    // <T extends {name: string}>(obj: T)
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docThree = addUID({ name: "yoshi", age: 40 });
console.log(docThree.name);
var docFour = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" }
};
var docFive = {
    uid: 1,
    resourceName: "person",
    data: "hello"
};
var docSix = {
    uid: 1,
    resourceName: "person",
    data: ["bread", "milk"]
};
console.log(docFour, docFive, docSix);
// 7. ENUMS
// Enums are a special type in typescript that allows you to store set of constant or keywords and associate them with a numeric value
// Enum is used to specify descriptive constants and associate each one with a numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var docSev = {
    uid: 1,
    resourceType: ResourceType.DIRECTOR,
    data: { title: "name of the wind" }
};
var docEig = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: "yoshi" }
};
// 8. Tuples
// Tuples is similar like arrays but the type of data in each position is fixed once it's been initialized
var arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];
var tup = ["ryu", 25, true];
// tup[0] = false
tup[0] = "ken";
tup[1] = 10;
// Sometimes, we have to use tuples while using spread operator on array => [...arr]
