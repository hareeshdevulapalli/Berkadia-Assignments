"use strict";
exports.__esModule = true;
exports.data = [{ rollno: 15, name: "a", age: 24, section: "A", dept: "cse" },
    { rollno: 17, name: "b", age: 45, section: "b", dept: "ece" },
    { rollno: 8, name: "c", age: 46, section: "c", dept: "it" }];
var Department_1 = require("./Department");
var d = new Department_1.Department();
d.displaychild(exports.data[0]);
d.displaychild(exports.data[1]);
d.displaychild(exports.data[2]);
d.displaychild({ rollno: 4, name: "jh", age: 98, section: "f", dept: "civ" });
