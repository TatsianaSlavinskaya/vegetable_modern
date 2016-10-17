var  Vegetable = {
    name: "no name",
   calories : 0
};
var cucumber = Object.create(Vegetable);
var potato = Object.create(Vegetable);
var tomato = Object.create(Vegetable);

Vegetable.getCalorificValue = function(){
    return this.calories;
}

cucumber.name="country";
cucumber.calories=35;

potato.name="morning";
potato.calories=55;

tomato.name= "red";
tomato.calories=30;

function Salad(){
    	var vegetables = [];
	this.addVegetable = function (something){
		return vegetables.push(something);
	}
	 this.showSalad = function(){
         return console.log(vegetables);
     }
	var sum = 0;
	this.totalCalorificValue = function(){
		for(var i=0; i < vegetables.length; i++){
			sum+=vegetables[i].getCalorificValue();
		}
		 return sum;
	}
}
var Salad1 = new Salad(); 
Salad1.addVegetable(cucumber);
Salad1.addVegetable(tomato);
Salad1.addVegetable(potato);

console.log( "Calorific Value of slad is  " + Salad1.totalCalorificValue() + " calories");

