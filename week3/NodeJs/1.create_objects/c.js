function Car(make, model, year) {
  					this.make = make;
  					this.model = model;
                    this.year = year;
                    this.display=function(){
                        console.log('maker company:'+this.make+' ,model name: '+this.model+', year:'+this.year);
                    };
}
var car1 = new Car('Eagle', 'Talon TSi', 1993);
    //whenever a fumction is called with the 'new' it creates that function/class constructor as object.
car1.display();
	//using that constructor() we can create many number of 'Car' based objects.
var car2 = new Car('Nissan', '300ZX', 1992);
car2.display();


Implementation:

PS C:\Users\user\desktop\Berkadia-Assignments\week3\NodeJs\1.Create_objects> node c.js
maker company:Eagle ,model name: Talon TSi, year:1993
maker company:Nissan ,model name: 300ZX, year:1992