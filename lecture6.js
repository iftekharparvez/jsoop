
// function Person() {
//     this.name = 'Iftekhar parvez'
// }

// function Teacher(){
//     Person.call(this);
//     this.subject = "Javascript language"
// }

// var teacher = new Teacher();

// var name = teacher.name;
// console.log(name);

function Person (name) {
    this.name = name;
}

Person.prototype.printName = function(){
    console.log('Name: ' + this.name);
}

Person.prototype.another = function(){
    console.log('This is an another function');
} 

//Student.prototype = Object.create(Person.prototype);
Object.setPrototypeOf(Student.prototype, Person.prototype);

function Student(name, id){
    Person.call(this, name);
    this.id = id;
}

Student.prototype = Object.create(Person.prototype);


var student = new Student('iftekhar parvez', 2560);

Person.prototype.printName = function(){
    console.log(this.name + ' Not Copied');
}

student.printName();

Person.prototype.skill = "Javascript";