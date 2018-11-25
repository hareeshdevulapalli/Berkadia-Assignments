var sc=require('readline-sync');
console.log("duplicate elements:");
var n=parseInt(sc.question("Enter number of elements : "));
var a=[];
var d = new Set([]); 
console.log("Enter "+n+" elements :");
for(let i=0;i<n;i++)
{
	a.push(parseInt(sc.question()));
}
for(let i=0;i<n;i++)
{
	for(let j=i+1;j<n;j++)
	{
		if(a[i]==a[j])
		{
			d.add(a[i]);
		}
	}
}
var dup=Array.from(d);			
console.log("Elements are : " + a);
console.log("duplicate element : ",dup)

Execution:

C:\Users\user\Desktop\node\week1>node duplicate.js
duplicate elements:
Enter number of elements : 5
Enter 5 elements :
5
5
2
1
1
Elements are : 5,5,2,1,1
duplicate element :  [ 5, 1 ]
