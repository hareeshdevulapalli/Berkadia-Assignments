const person = {
    isHuman: true,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(person);
me.name='buffet';
me.printIntroduction();
const other = Object.create(person);
other.name='car'
other.isHuman=false;
other.printIntroduction();


Implementation:

PS C:\Users\user\desktop\Berkadia-Assignments\week3\NodeJs\1.Create_objects> node d.js
My name is buffet. Am I human? true
My name is car. Am I human? false