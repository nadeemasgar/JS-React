const arr = [1, 2, 3, 4];

const reducer = (sum, currVal) => sum + currVal;

const value = arr.reduce(reducer, 0);

console.log(value);
