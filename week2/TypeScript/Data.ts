import { StudentInfo } from './Student';
export var data:StudentInfo[] =[   {rollno:15 ,name:"a",age:24,section:"A",dept:"cse"},
                            {rollno:17,name:"b",age:45,section:"b",dept:"ece"},
                            {rollno:8,name:"c",age:46,section:"c",dept:"it"} ];
import { Department } from './Department';
var d=new Department();
d.displaychild(data[0]);
d.displaychild(data[1]);
d.displaychild(data[2]);
d.displaychild({rollno:4,name:"jh",age:98,section:"f",dept:"civ"});
