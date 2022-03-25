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
const pobj1 = new Promise((resolve, reject) => { // Promise as function construtor
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    // resolve(roll_no);
    reject("Error while communicating");
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




const getBiodata = (indexdata) => {     // Promise as an object
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

getBiodata(1).then( (res) => {
     console.log(res);
})




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