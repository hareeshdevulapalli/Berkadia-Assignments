//  indexOf() : To find a string with another string, use the indexOf function.
var a = "this is a test".indexOf("is");
console.log(a); //2

//  substr() : To extract a substring from a string, use the substr.substr takes the starting index and length of string to extract. 
var b = "this is a test string.".substr(19, 3);
console.log(b);//ng.

//  slice() : To extract a substring from a string, use the slice.splice takes the starting index and ending index.
var c = "this is a test string.".slice(19, 22);
console.log(c);//ng.

//  split() : To split string into substrings, use the split function and get an array as the result.
var d = "a|b|c|d|e|f|g|h".split("|");
console.log(d);//['a','b','c','d,','e','f','g','h']

//  trim() : To remove whitespaces.
var e = '       cat   \n\n\n    '. trim();
console.log(e);//cat

//  toUpperCase() : converts string into uppercase.
var f = 'HelLo';
console.log(f.toUpperCase());//HELLO

//  toLowerCase() : converts string into lowercase.
var g = 'HelLo';
console.log(g.toLowerCase());//hello

//  length : The length property returns the length of a string.
var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
console.log(h);//26

//  lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
var i = "Please locate where 'locate' occurs!".lastIndexOf("locate");
console.log(i);//21
var j = "Please locate where 'locate' occurs!".lastIndexOf("locate",15);//giving starting index. 
console.log(j);//21

//  search() : The search() method searches a string for a specified value and returns the position of the match.
var k = "Please locate where 'locate' occurs!".search("locate");
console.log(k);//7

//  chatAt() : Displays the character at specified index.
var l="hello";
console.log(l.charAt(0));//h

//  concat() : concatenates 'hello' to 'm'.
var m="good morning".concat("hello");
console.log(m);//good morninghello

//  endsWith() : checks whether the string ends with the given string or not and returns a boolean value.
console.log(m.endsWith("hello"));//true

//  startWith() : checks whether the string starts with the given string or not and returns a boolean value.
console.log(m.startsWith("hello"));//false

//  includes() : checks whether the string includes the given string or not even at intereadiate positions and returns boolean value.
console.log(m.includes("hello"));//true

//  match() : Searches a string for a match against a regular expression, and returns the matches.
console.log(s.match("hello"));//[ 'hello',index: 12,input: 'good morninghello',groups: undefined ]

//  replace() : Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
console.log(s.replace("hello","hii"));//good morninghii