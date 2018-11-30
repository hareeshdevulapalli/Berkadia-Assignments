/*      Inheritance is a mechanism wherein a new class is derived from an existing class. In Java, classes may inherit or
acquire the properties and methods of other classes. A class derived from another class is called a subclass, whereas
the class from which a subclass is derived is called a superclass.JavaScript does not have classes unlike other languages.
It uses the concept of prototypes and prototype chaining for inheritance.

*/
function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}
Animal.prototype.eat = function() {
    return `${this.name} is eating!`;
}
Animal.prototype.sleep = function() {
    return `${this.name} is going to sleep!`;
}
Animal.prototype.wakeUp = function() {
    return `${this.name} is waking up!`;
}
function Gorilla(name, weight) {
    Animal.call(this, name, weight);
}
Gorilla.prototype = Object.create(Animal.prototype);
Gorilla.prototype.constructor = Gorilla;
Gorilla.prototype.climbTrees = function () {
    return `${this.name} is climbing trees!`;
}
Gorilla.prototype.poundChest = function() {
    return `${this.name} is pounding its chest!`;
}
Gorilla.prototype.showVigour = function () {
    return `${Animal.prototype.eat.call(this)} ${this.poundChest()}`;
}
Gorilla.prototype.dailyRoutine = function() {
    return `${Animal.prototype.wakeUp.call(this)} ${this.poundChest()} ${Animal.prototype.eat.call(this)} ${Animal.prototype.sleep.call(this)}`;
}
function display(content) {
    console.log(content);
}
var gorilla = new Gorilla('George', '160Kg');// OUTPUT:
display(gorilla.poundChest());               // George is pounding its chest!
display(gorilla.sleep());                    // George is going to sleep!
display(gorilla.showVigour());               // George is eating! George is pounding its chest!
display(gorilla.dailyRoutine());             // George is waking up! George is pounding its chest! George is eating! George is going to sleep!





