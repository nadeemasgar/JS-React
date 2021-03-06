/* 1. DOM & Type Casting */
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

form1.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});

/*  2. Classes */

class Invoice {
  readonly client: string; // readonly is used to read the value inside & outside of the class
  private details: string; // private is used to not allow the value to be accessed outside the class
  public amount: number; // public is used to change & read the value outside and inside of the class

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

/* 3. Puble, Private, Readonly */

class test {
  //   readonly name: string;
  //   private age: number;
  //   public gender: string;

  constructor(
    readonly name: string,
    private age: number,
    public gender: string
  ) {}

  display() {
    return `${this.name} is of ${this.age} age and of gender ${this.gender}`;
  }
}

const man1 = new test("rahul", 30, "male");
console.log(man1);

/* 4. Interfaces */

// Interfaces allows you to enforce a certain structure of a class or an object
// We donot use interface to generate object
// Interfaces inforces the rule on a object on how it will look

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "shaun",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent ", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("hello ", person.name);
};

greetPerson(me);

console.log(me);

/* 5. Interfaces with classes */

interface HasFormatter {
  format(): string;
}

class Invoice1 implements HasFormatter {
  readonly client: string; // readonly is used to read the value inside & outside of the class
  private details: string; // private is used to not allow the value to be accessed outside the class
  public amount: number; // public is used to change & read the value outside and inside of the class

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} owed $${this.amount} for ${this.details}`;
  }
}

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("luigi", "plumbing work", 200);

let docs: HasFormatter[] = [];
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

const addUID = <T extends object>(obj: T) => {
  // <T extends {name: string}>(obj: T)
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docThree = addUID({ name: "yoshi", age: 40 });

console.log(docThree.name);

// Generics with Interfaces
interface Resources<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docFour: Resources<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFive: Resources<string> = {
  uid: 1,
  resourceName: "person",
  data: "hello",
};

const docSix: Resources<string[]> = {
  uid: 1,
  resourceName: "person",
  data: ["bread", "milk"],
};

console.log(docFour, docFive, docSix);

// 7. ENUMS

// Enums are a special type in typescript that allows you to store set of constant or keywords and associate them with a numeric value
// Enum is used to specify descriptive constants and associate each one with a numeric value

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docSev: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.DIRECTOR,
  data: { title: "name of the wind" },
};

const docEig: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { name: "yoshi" },
};

// 8. Tuples

// Tuples is similar like arrays but the type of data in each position is fixed once it's been initialized

let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];

let tup: [string, number, boolean] = ["ryu", 25, true];
// tup[0] = false
tup[0] = "ken";
tup[1] = 10;

// Sometimes, we have to use tuples while using spread operator on array => [...arr]
