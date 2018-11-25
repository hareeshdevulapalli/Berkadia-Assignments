var f = require('fs');
var readline=require('readline-sync');
console.log("Displaying before changing file");
var dat=f.readFileSync('file2.txt', 'utf8');
console.log(dat);
var data=readline.question("Enter data to write into the file:\n");
console.log("Displaying changed file");
f.writeFile('file2.txt', data, function(err, data){
    if (err) console.log(err);
    var dat=f.readFileSync('file2.txt', 'utf8');
    console.log(dat);
    console.log("Successfully Written to File.");
});

Execution:

PS C:\Users\user\desktop\node\week2\nodejs\FS_Module> node write.js
Displaying before changing file
hii
Enter data to write into the file:
how
Displaying changed file
how
Successfully Written to File.
