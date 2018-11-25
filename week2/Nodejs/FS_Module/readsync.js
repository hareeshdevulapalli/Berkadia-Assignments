var fread = require('fs');
var contents = fread.readFileSync('file1.txt', 'utf8');
console.log(contents);
console.log('readFile operation done');


Execution:

PS C:\Users\user\desktop\node\week2\nodejs\FS_Module> node readsync.js
Hi this is file one !!!!
readFile operation done
