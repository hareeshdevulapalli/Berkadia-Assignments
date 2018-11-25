var sc=require('readline-sync');
console.log("Prime number:");
var n=parseInt(sc.question("Enter number : "));
var c=0;
for(var i=2;i<=Math.sqrt(n);i++)
{
	
	if(n%i==0)
	{
		c=1;
		console.log("Given number is prime number :",n);
	}
}
if(c==0)
{
	console.log("Given number is not a prime number :",n);
}

Execution:

C:\Users\user\Desktop\node\week1>node prime.js
Prime number:
Enter number : 89
Given number is not a prime number : 89

C:\Users\user\Desktop\node\week1>node prime.js
Prime number:
Enter number : 4
Given number is prime number : 4
