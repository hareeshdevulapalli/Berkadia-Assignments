function fact(n)
{
	if(n==1)
		return 1;
	else
		return n*fact(n-1);
}

var sc=require('readline-sync');
console.log("Factorial of Number:");
var n=parseInt(sc.question("Enter number : "));
var f=fact(n);
console.log("Factorial is :"+f);

Execution:

C:\Users\user\Desktop\node\week1>node fact.js
Factorial of Number:
Enter number : 6
Factorial is :720

C:\Users\user\Desktop\node\week1>node fact.js
Factorial of Number:
Enter number : 5
Factorial is :120

C:\Users\user\Desktop\node\week1>
C:\Users\user\Desktop\node\week1>node fact.js
Factorial of Number:
Enter number : 1
Factorial is :1
