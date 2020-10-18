const fs = require('fs');

// delete file
fs.unlink('writeMe.txt', () => {});

// fs.mkdirSync('sundry', () => {})

fs.mkdir('sundry', () => {
  fs.readFile('readMe.txt', 'utf-8', (err, data) => {
    fs.writeFile('./sundry/writeMe.txt', data, () => {});
  });
})

fs.unlink('./sundry/writeMe.txt', () => {});
fs.rmdir('sundry', () => {});