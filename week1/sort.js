var sc=require('readline-sync');

var n=parseInt(sc.question("Enter number of elements : "));
var a=[],max=0;
console.log("Enter "+n+" elements :");
for(let i=0;i<n;i++)
{
	a.push(parseInt(sc.question()));
}
console.log("Before Sorting:",a);
for(let i=0;i<n;i++)
{
	for(let j=0;j<n-1;j++)
	{
		if(a[j]>=a[j+1])
		{
			let temp=a[j];
			a[j]=a[j+1];
			a[j+1]=temp;
		}
	}
}
console.log("After Sorting:",a);

Execution:

C:\Users\user\Desktop\node\week1>node sort.js
Enter number of elements : 5
Enter 5 elements :
4
3
7
1
6
Before Sorting: [ 4, 3, 7, 1, 6 ]
After Sorting: [ 1, 3, 4, 6, 7 ]
