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