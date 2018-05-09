console.log("== Hello world");

process.argv.forEach(function (arg, i) {
  console.log("== The " + i + "'th argument is:", arg);
});

console.log("== process.env.SOME_ENV_VARIABLE:", process.env.SOME_ENV_VARIABLE);

console.log("== __filename:", __filename);
console.log("== __dirname:", __dirname);

var fs = require('fs');
// fs.readFile(...);

var circumference = require('./circumference');
console.log("== circumference(5):", circumference(5));
console.log("== circumference(8):", circumference(8));

var circle = require('./lib/circle');
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));

var figlet = require('figlet');
figlet("CS 290!!", function (err, data) {
  if (!err) {
    console.log(data);
  }
});
