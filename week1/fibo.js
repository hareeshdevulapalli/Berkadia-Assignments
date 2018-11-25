var sc=require('readline-sync');
console.log("Fibonacci series:");
var n=parseInt(sc.question("Enter number of elements : "));
var a=[];
a.push(0);
a.push(1);
for(var i=2;i<n;i++)
{
	a.push(a[i-2]+a[i-1]);
}
console.log("Series :"+a);

Execution:

C:\Users\user\Desktop\node\week1>node fibo.js
Fibonacci series:
Enter number of elements : 5
Series :0,1,1,2,3

C:\Users\user\Desktop\node\week1>node fibo.js
Fibonacci series:
Enter number of elements : 8
Series :0,1,1,2,3,5,8,13
