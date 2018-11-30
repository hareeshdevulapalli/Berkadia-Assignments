//  NULL : It can be assigned to a variable to represent no value. It is an assignment value.
var b = null;
console.log(b); //null
console.log(typeof b); //object

//  Undefined : It means a variable has been declared but has not yet been assigned a value.
var a;
console.log(a); //undefined
console.log(typeof a); // undefined

//  Undeclared : If a variable is not declared then the browser throws error.
console.log(nonDeclaredVariable);// Uncaught ReferenceError: nonDeclaredVariable is not defined
console.log(typeof nonDeclaredVariable); //undefined

//  NaN : It represents “Not-a-Number” value. This property indicates that a value is not a legal number.
var c = NaN;
console.log(c); //NaN
console.log(typeof c); //number