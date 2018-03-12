
function Animal(name){
    this.name = name;
}

Animal.prototype.printName = function(){
    console.log(this.name);
}

function myNew(constructor){

    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var arrArgs = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, arrArgs.slice(1));
    return obj;

}


var cat = myNew(Animal,'cats');

cat.printName();

// var cat = new Animal('Cat');
// var dog = new Animal('Dog');

// cat.printName();

var Person = function(name, age){
    this.name = name;
    this.age = age;
}

var p1 = myNew(Person, "Iftekhar Parvez", 25);
