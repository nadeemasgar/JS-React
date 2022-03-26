const pObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    let name = "Nadeem";
    resolve(name);
  }, 2000);
  console.log("Inside promise");
});

pObj
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

const fun = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 3000);
  });
};

fun("Asgar").then((val) => {
  console.log(val);
});
