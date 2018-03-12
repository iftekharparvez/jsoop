
// function printMe(){
//     console.log('Hello.. ' + this.name);
// }

// var obj1 = {
//     name: 'iftekhar parvez',
//     age: 25
// }
// var obj2 = {
//     name: 'rahim ahmed',
//     email: 'rahimw@gmail.com'
// }

// var bounded1 = printMe.bind(obj1);
// var bounded2 = printMe.bind(obj2);

// bounded1();
// bounded2();

// printMe.call(obj1);

function add(a, b){
    return (a + b) * this.c;
}

var obj1 = {
    c: 6
}

var obj2 = {
    c: 9
}

var res = add.call(obj1, 3, 6);
res;

var res2 = add.apply(obj2, [12, 5]);
res2;

