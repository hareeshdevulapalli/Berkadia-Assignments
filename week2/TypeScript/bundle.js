(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i])
{var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);
var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};
e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}
for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports)
{
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

},{"./Department":2}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Student_1 = require("./Student");
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department() {
        return _super.call(this) || this;
    }
    Department.prototype.displaychild = function (k) {
        console.log(k.rollno + "      " + k.name + "   " + k.age + "      " + k.section + "       " + k.dept);
    };
    return Department;
}(Student_1.Student));
exports.Department = Department;

},{"./Student":3}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
        console.log("Student Details:");
        console.log("RollNo Name Age Section Department");
    }
    return Student;
}());
exports.Student = Student;

},{}]},{},[1]);
