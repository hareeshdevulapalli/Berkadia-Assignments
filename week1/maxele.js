var sc=require('readline-sync');
console.log("Maximum of all elements:");
var n=parseInt(sc.question("Enter number of elements : "));
var arr=[],max=0;
console.log("Enter "+n+" elements :");
for(var i=0;i<n;i++)
{
	arr.push(parseInt(sc.question()));
	if(max<=arr[i])
	{
		max=arr[i];
	}
}
console.log("Elements are : " + arr);
console.log("Maximum element : ",max);

Execution:

C:\Users\user\Desktop\node\week1>node maxele.js
Maximum of all elements:
Enter number of elements : 5
Enter 5 elements :
5
5
1
6
2
Elements are : 5,5,1,6,2
Maximum element :  6
