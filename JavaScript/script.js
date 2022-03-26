// forEach, map, filter, Reducer

var numbers = [1, 2, 3, 4];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

var newNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  newNumbers[i] = numbers[i] * 2;
}

numbers.forEach(function (number) {
  console.log(number);
});

numbers.forEach(function (number, i) {
  numbers[i] = numbers[i] * 2;
  console.log(numbers[i]);
});

var newNumbers = numbers.map(function (number, i) {
    return number * 2;
})
 // forEach iterates through an array and doesn't produce an output value
 // map iterates through an array, giving you a new array of the same length
 // Filter iterates through an array and gives the array of same size or smaller based on some condition
 // Reducer is used to reduce down to single value


 var number10 = [5, 10, 4, 3];

 var evens = number10.filter(function (number) {
     return number % 2 == 0;
 })

 console.log(evens);



 var numbers = [1, 2, 10, 15, 100];

 var sum = numbers.reduce(function(sum, value) {
    return sum + value;
 }, 0)