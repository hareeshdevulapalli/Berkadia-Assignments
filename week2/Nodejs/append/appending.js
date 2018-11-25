var fs = require('fs');
function Append(file1, file2){
    data=fs.readFileSync(file2,'utf-8');
    fs.appendFileSync(file1, data);
}
console.log("Before appending individual files data");
file1='file1.txt';
var d=fs.readFileSync(file1,'utf-8');
console.log(d);
file2='file2.txt';
d=fs.readFileSync(file2,'utf-8');
console.log(d);
file3='file3.txt';
d=fs.readFileSync(file3,'utf-8');
console.log(d);
Append(file1,file2);
Append(file1,file3);
console.log("file1 after appending:");
fs.readFile('file1.txt', 'utf8', function(err, contents) {
    console.log(contents);
});

Execution:


PS C:\Users\user\desktop\node\week2\nodejs\append> node appending.js
Before appending individual files data
this is file1
this is file two
this is file 3
file1 after appending:
this is file1this is file twothis is file 3
