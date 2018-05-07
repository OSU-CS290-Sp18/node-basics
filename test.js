console.log("== Hello world");

process.argv.forEach(function (arg, i) {
  console.log("== The " + i + "'th argument is:", arg);
});

console.log("== process.env.SOME_ENV_VARIABLE:", process.env.SOME_ENV_VARIABLE);

console.log("== __filename:", __filename);
console.log("== __dirname:", __dirname);

var fs = require('fs');
// fs.readFile(...);
