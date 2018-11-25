var sc=require('readline-sync');
console.log("Minimum of all elements:");
var n=parseInt(sc.question("Enter number of elements : "));
var a=[],min=0;
console.log("Enter "+n+" elements :");
for(let i=0;i<n;i++)
{
	a.push(parseInt(sc.question()));
}
min=a[0];
for(let i=1;i<n;i++)
{
	if(min>=arr[i])
	{
		min=arr[i];
	}
}
console.log("Elements are : " + a);
console.log("Minimum element : ",min);

Execution:

C:\Users\user\Desktop\node\week1>node minele.js
Minimum of all elements:
Enter number of elements : 5
Enter 5 elements :
5
5
1
6
2
Elements are : 5,5,1,6,2
Minimum element :  1
