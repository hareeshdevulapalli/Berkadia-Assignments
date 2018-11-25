export interface StudentInfo{
    rollno:number,
    name:String,
    age:number,
    section:String,
    dept:String
}
export class Student {
    constructor() {
            console.log("Student Details:");
            console.log("RollNo Name Age Section Department");
        }
}
