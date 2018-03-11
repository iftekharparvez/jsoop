

// var obj = {
//     name: 'Iftekhar parvez',
//     print: function(){
//         console.log(this.name);
//     }
// }

// function myFunc(){

//     function InnerFunc(){
//         console.log(this);
//     }
//     new InnerFunc();
// }


// obj.print();

// var person = {
//     name: 'Iftekhar Parvez',
//     print: function(){
//         console.log(this);
//         console.log('Hello.parvez.. ' + this.name );
//     }
// }

//person.print();

// var data = function(){
//     console.log(this);
//     console.log('hello');
// }

// var data = person.print.bind(person);
// console.log(data);
//  data();


// function add(num){
//     console.log(this);
//     return this.value + num;
// }

// var obj = {
//     value: 30
// }


// var binded = add.bind(obj);
// var result = binded(20);
// console.log(result);

var person = {
    name: 'Iftekhar Parvez',

    print: function(){
       // var name = this.name;
        setTimeout(function(){
            console.log(this);
            console.log('My Name: ' + this.name);
        }.bind(this),2000);

    }
}
