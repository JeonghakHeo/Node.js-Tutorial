const fs = require('fs');


// Sync method will block codes before completion
// var readMe = fs.readFileSync('readMe.txt', 'utf-8');
fs.readFile('readMe.txt', 'utf8', (err ,data) => {
  fs.writeFile('writeMe.txt', data, () => {});
});

console.log('this should come first becuase above is async');
// fs.writeFileSync('writeMetxt', readMe);

// console.log(readMe);