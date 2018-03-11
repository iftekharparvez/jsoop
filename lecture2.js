
// var books = [
//     {
//         name: 'Functional Javascirpt',
//         author: 'Micle migri'
//     },
//     {
//         name: 'Jqury Basic',
//         author: 'guitnam rosik'
//     }
// ]

// function Person(name, email){
//     this.name = name;
//     this.email = email;
//     this.print = function(){
//         console.log('Name: ' + this.name + 'Email: ' + this.email);
//     }
// }
// Person.name;

// var p1 = new Person('parvez','parvez@mail.com');
// var p2 = new Person('rahim','rahim@mail.com');
// var p3 = new Person('karim','karim@mail.com');

// var people = [p1,p2,p3];


//console.log(people);

// var data = people.forEach(function(single) {
//     console.log('Name : ' + single.name);
//     console.log('Email : ' + single.email);
// });

// for(var props in p1){
//     console.log('Properties: ' + props);
// }

function Book(name, author, price){
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book('Functional javascript','Micbel fogus',300);

console.log(book.constructor);