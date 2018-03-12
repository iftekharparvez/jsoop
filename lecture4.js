

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.hello = function(){
//         console.log('hello..., ' + this.name);
//     }
// }

function Person(name, age) {
    this.name = name;
    this.age = age;

}

// Person.prototype.hello = function(){
//     console.log('Hello.... ' + this.name);
// }

// Person.prototype.print = function(){
//     console.log(this.name, this.age);
// }

Person.prototype = {
    hello: function(){
        console.log('Hello, ' + this.name);
    },
    print: function(){
        console.log(this.name, this.email);
    },
    email: 'iftekhar@gmail.com'
}



var p1 = new Person('parvez', 25);
var p2 = new Person('rahim', 24,);



console.log(p1);
console.log(p2);
console.log(Person.prototype);