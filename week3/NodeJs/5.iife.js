/*
    An IIFE, or Immediately Invoked Function Expression, is a common JavaScript design pattern used by most popular 
libraries (jQuery, Backbone.js, Modernizr, etc) to place all library code inside of a local scope. In the words of James Padolsey:
An IIFE protects a module's scope from the environment in which it is placed.A function, without a name, is created and then called 
(invoked) immediately via the () at the very end.
*/
var sum=(a,b)=>{
    console.log(a+b);
};

(function(a,b){         //Ananymous function.
    console.log("Immediately invoked ");
    console.log(a+b);   //this function is executed when it's read.
})(2,3);
sum(4,6);


Implementation:

PS C:\Users\user\desktop\Berkadia-assignments\week3\nodejs> node 5.iife.js
Immediately invoked
5
10