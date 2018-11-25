import { Student,StudentInfo } from './Student';
export class Department extends Student {
    constructor(){
        super();
    }
    displaychild(k:StudentInfo){
        console.log(k.rollno+"      "+k.name+"   "+k.age+"      "+k.section+"       "+k.dept);
    }
}
