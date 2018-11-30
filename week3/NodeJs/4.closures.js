/*
    A closure is the combination of a function and the lexical environment within which that function was declared. 
    A Closure is a function defined within another scope that has access to all the variables within the outer scope. A Closure 
allows us a free environment for the outer function to access the inner functions and inner variables without any scope restrictions.
    A Closure is the local variables for a function, kept alive after the function has returned or it's a stack-frame that is not 
deallocated when the function returns. A Closure is an inner function that has access to the outer function variables-scope chain. 
The Closure has 3 scope chains; the first one is to access to its own scope (variables defined within the curly brackets) and the 
second one is to access the outer function's variables and the third one is to access the global variables.
*/
//Example-1 :
function outer(a) {
    var b= 20; 
    function inner(c) {
     var d = 40;
     return a * b / (d - c);
   }
   return inner;
}
var x = outer(10);
var y = x(30);
//local c=30,d=40
  //closure a=10,b=20
console.log(y);

//Example-2 :
function makeAdder(x) {
    return function(y) {
    return x + y;
    };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));  // 7
console.log(add10(2)); // 12