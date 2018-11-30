/*
    for loop :
*/
let k=(n)=>{
    let sum=0;
    for(let i=0;i<=n;i++){
        sum +=i;
    }
    return sum;
};
k(5);   //output:15


/*
    forEach() : forEach clause works only with those data structure which are Arrays. The method basically 
iterates over the elements of the array and executes a callback function [basically some executable function/ fun activity].
*/
const arr = [1,2,3,4];
arr.forEach(function(element){
      console.log(element);      
      });
//output:1 2 3 4 

/*
      for of() : The for-of loop creates a loop iterating over iterable member objects. The list is an extensive one such as
Array,Map,Set,String,TypedArray.
**/
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let [key, value] of iterable) {
  console.log(value);
  console.log(key);
}
/*
    Output:
    1
    "a"
    2
    "b"
    3
    "c"
*/

/*
    A for...in loop only iterates over enumerable, non-Symbol properties. Objects created from built–in constructors like Array 
and Object have inherited non–enumerable properties from Object.prototype and String.prototype, such as String's indexOf() method 
or Object's toString() method. The loop will iterate over all enumerable properties of the object itself and those the object inherit
from its constructor's prototype (properties closer to the object in the prototype chain override prototypes' properties).
*/
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 += object1[property1];
}

console.log(string1);
// expected output: "123"