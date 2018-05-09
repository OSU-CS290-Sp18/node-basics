var fs = require('fs');

fs.readFile('./files.js', 'utf8', function (err, data) {
  if (!err) {
    console.log("== The contents of files.js:");
    console.log(data);
  }
});
console.log("== After call to readFile()");

var fileContents = fs.readFileSync('./circumference.js', 'utf8');
console.log("== Contents of circumference.js:");
console.log(fileContents);

fs.writeFile(
  './writeThisFile.txt',
  'This is my file content.',
  function (err) {
    if (!err) {
      console.log("== writeThisFile.txt was written")
    }
  }
);
