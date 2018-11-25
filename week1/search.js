var sc=require('readline-sync');

var n=parseInt(sc.question("Enter number of elements : "));
var a=[],flag=0;
var key=parseInt(sc.question("Enter key: "));

console.log("Enter "+n+" elements :");
for(let i=0;i<n;i++)
{
	a.push(parseInt(sc.question()));
}
for(let i=0;i<n;i++)
{
	if(a[i]==key)
	{
    flag=1;
		console.log("Search successful "+key+" found at "+i+" position");
		break;
	}		
}
if(flag==0)
console.log("Search unsuccessful ");

Execution:

C:\Users\user\Desktop\node\week1>node search.js
Enter number of elements : 5
Enter key: 7
Enter 5 elements :
5
5
3
1
2
Search unsuccessful

C:\Users\user\Desktop\node\week1>node search.js
Enter number of elements : 4
Enter key: 3
Enter 4 elements :
4
1
2
3
Search successful 3 found at 3 position
