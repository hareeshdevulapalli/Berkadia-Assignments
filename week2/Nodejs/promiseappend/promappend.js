var fs=require('fs');
const promappend=(file1,file2)=>
	{
		return new Promise((resolve,reject)=>
		{
			fs.readFile(file2,'utf-8',function(err,data){
                if(err)
                throw err;
                fs.appendFile(file1,data,()=>{});
            });
		});
		
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
console.log("After appending");
promappend(file1,file2).then(promappend(file1,file3)).catch(error=>console.log(error));
fs.readFile('file1.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
console.log("files appended");

Execution:

PS C:\Users\user\desktop\node\week2\nodejs\promiseappend> node promappend.js
Before appending individual files data
this is file1
this is file two
this is file 3
After appending
files appended
this is file1
