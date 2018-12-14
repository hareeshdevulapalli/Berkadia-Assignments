/*
Babel is a JavaScript compiler
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible 
version of JavaScript in current and older browsers or environments. Here are the main things Babel 
can do for you:
    Transform syntax
    Polyfill features that are missing in your target environment (through @babel/polyfill)
    Source code transformations (codemods)
*/
//sample.js
var a=()=>console.log("Hello");
/*
Using babel above one can be converted into the following
    >>babel sample.js
*/
var a = function(){
    console.log("Hello");
}