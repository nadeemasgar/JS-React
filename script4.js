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

/* -------------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------------- */
// Async/await
// The word async before a function means one simple thing: async function always returns a promise.
// Use .then to handle the resolve promise.
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

/* -------------------------------------------------------------------------------- */
// Fetch API (Get Request)

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

/* Other Example of Fetch API (Get Request) */

function getData1() {
  console.log("Started getData");
  url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => {
      console.log("115 Inside first then");
      return response.text();
    })
    .then((data) => {
      console.log(data + " 118 Inside second then");
    });
}

getData1();

// Fetch API (Post Request)
function postData() {
  const data = '{"name":"abcde1","salary":"123","age":"23"}';
  const url = "	http://dummy.restapiexample.com/api/v1/create";
  const params = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  };

  fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

postData();

/* -------------------------------------------------------------------------------- */
/* Error Handling */

let a = "Harry Bhai";
/*
    if (a != undefined) {
    throw new Error("This is not undefined"); // Custom error
    } else {
    console.log("This is undefined");
    }
*/

try {
  console.log("We are inside try block");
  error_creation;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log("Are you okay?");
} finally {
  console.log("Finally we will run this");
}

async function getData2() {
  try {
    const rollnodata = await pobj1;
    console.log(rollnodata);

    const biodatas = await getBiodata(rollnodata[1]);
    console.log(biodatas);

    return biodatas;
  } catch (error) {
    console.log(`189 The Error: ${error}`);
  }
}

const res = getData2().then((myname) => {
  console.log(`At line 194 ${myname}`);
});

// The Fetch API provides a fetch() method defined on the window object, which you can use to perform requests.
// This method returns a Promise that you can use to retrieve the response of the request.

fetch("https://api.covid19api.com/summary")
  .then((apiData) => {
    return apiData.json();
  })
  .then((actualData) => {
    console.log(actualData);
  })
  .catch((error) => {
      console.log(error);
  })


// So, the async keyword is added yo functions to tell them to return a promise rather than directly returning the 
// value.  


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
