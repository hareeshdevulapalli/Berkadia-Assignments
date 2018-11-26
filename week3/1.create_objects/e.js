var person=function(){
};
person.prototype.name='no name';
person.prototype.age=0;
person.prototype.height=0;
person.prototype.displayPerson=function(){
    console.log('NAME:'+this.name+',AGE:'+this.age+',HEIGHT:'+this.height);
}
const p1=new person();//Note: person is prototype of p1 .
p1.name='abc';
p1.age=23;
p1.height=5.7;
p1.displayPerson();
const p2=new person();
console.log('name' in p2); //outputs as 'true' since it created out of person() object and 'name' is available in person().
console.log(p2.hasOwnProperty('age')); //since it doesn't have any own property named 'age',it actually inherited from person().
console.log('gender' in p2);//'gender' is not available 1st in p2 and then in 'person()'.
p2.gen='male';
//'p2' prints prototype of object person().
p2.displayPerson()+console.log(',GENDER:'+p2.gen);
console.log(person.prototype.isPrototypeOf(p1));//output is true.

