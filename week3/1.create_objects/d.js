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
