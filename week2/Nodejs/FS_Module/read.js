var fs = require('fs');
fs.readFile('file1.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
console.log('readFile operation done');

Execution:

PS C:\Users\user\desktop\node\week2\nodejs\FS_Module> node read.js
readFile operation done
Hi this is file one !!!!
