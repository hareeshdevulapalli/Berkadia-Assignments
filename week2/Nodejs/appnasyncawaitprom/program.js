var fs=require('fs');
var c=1;
async function append(file1,file2)
	{	c=c+1;
        let prom= new Promise((resolve,reject)=>
		{
			fs.readFile(file2,'utf-8',function(err,data){fs.appendFile(file1,data,()=>{});});
		});
		await console.log("files appended"+c);
    }
append('file1.txt','file2.txt').then(append('file1.txt','file3.txt')).then(append('file1.txt','file4.txt'))
.catch((error)=>console.log(error));


Execution:

PS C:\Users\user\desktop\node\week2\nodejs\appnasyncawaitprom> node program.js
files appended2
files appended3
files appended4
