const fetch = require("node-fetch");

// Asynchronous JavaScript

// Callback Function
function show() {
  console.log("I am show function");
}

function geeky(callback) {
  callback();
}

geeky(show);

// 1 Pending,  2 Resolve, 3 Reject

// Promise Constructor
// Promise as an Object

// A function to be executed by the constructor, during the process of constructing the promiseObj.
// The executor is custom code that lies an outcome to a promise. You, the programmer, write the execution.

// Promise creation using new (Promise produce)
// executor function -> (resolve, reject)
const pobj1 = new Promise((resolve, reject) => {
  // Promise as function construtor
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
    // reject("Error while communicating");
  }, 2000);
});

// promise consume
pobj1
  .then((rollno) => {
    console.log(rollno);
  })
  .catch((err) => {
    console.log(err);
  });

const getBiodata = (indexdata) => {
  // Promise as an object
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexdata) => {
        let biodata = {
          name: "vinoid",
          age: 26,
        };
        resolve(`My name is ${indexdata}`);
      },
      2000,
      indexdata
    );
  });
};

getBiodata(1).then((res) => {
  console.log(res);
});

// Async/await
// The word async before a function means one simple thing: async function always returns a promise.
// So async keyword is added to functions to tell them to return a promise rather than directly returning the value.
// We can use await when calling any function that returns a Promise, including Web API functions.
// The keyword await makes javaScript wait until that promise settles and returns its result.

async function getData() {
  const rollnodata = await pobj1;
  console.log(`In Async fun + ${rollnodata}`);

  return rollnodata;
}

const data = getData().then((data) => {
  console.log(data);
});

// async function harry() {
//   console.log("Inside harry function");
//   const response = await fetch("https://api.github.com/users");
//   console.log("Before Response");
//   const users = await response.json();
//   console.log("Users resolved");
//   return users;
// }

// let a = harry();
// console.log(a);
// a.then((data) => {
//   console.log(data);
// });

const demo = async () => {
  console.log("Inside Demo Function");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

let b = demo();
console.log(b);
b.then((data) => {
  console.log(`107 hello ${data}`);
}).catch((err) => console.log("108 err12"));


function getData1() {
    console.log("Started getData");
    url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url).then((response) => {
        console.log("115 Inside first then");
        return response.text();
    }).then((data) => {
        console.log(data + " 118 Inside second then");
    })
}

getData1();

/*
// const abc = (arg) => {
//     return arg;
// }

// abc("nadeem")


// Wrapper
const anc2 = (props) => { // abc2 ka wrapper hai abc
    abc(props)
}

 const abc = (arg) => {
    return arg;
 }  
 */
