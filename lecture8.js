

function Obj(a, b) {
    this.a = a;
    this.b = b;
}

function Obj2(a,b,c){
    Obj.call(this, a, b);
    this.c = c;
}
Obj2.prototype = Object.create(Obj.prototype);
 
function Obj3(){
    Obj2.call(this, 10, 30, 50);
}

Obj3.prototype = Object.create(Obj2.prototype);




var obj1 = new Obj(1, 2);

console.log(obj1);

var obj2 = new Obj2(2, 5, 6);
obj2;

var obj3 = new Obj3();
obj3;