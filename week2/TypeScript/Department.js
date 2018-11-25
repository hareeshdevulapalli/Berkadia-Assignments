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
