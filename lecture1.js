
// var obj = {};

// var obj1 = new Object;
// console.log(obj);
// console.log(obj1);

function data(){

}

var book = {
    name: 'Funcional javascript',
    author: 'Micbael Fogus',
    publisher: 'o\'Reilly',
    page: 250,
    print: function(){
        console.log(this.name, this.author);
    }
}

// console.log('Publish Year: ' + book.publishYear);
// book.publishYear = 2014;

// console.log(book.publishYear);

// book['price'] = 3000;
// console.log(book.price);

for(var props in book){
    console.log(props + ': ' + book[props]);
}

// console.log(book.print());
// console.log(book['author']);