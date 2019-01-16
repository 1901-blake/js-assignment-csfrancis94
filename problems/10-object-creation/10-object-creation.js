/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let obj1 = {a:0,b:2,c:3,d:{a:2,b:0}};
//function constructor
let obj2 = new function(){this.a=0;this.b=2;this.c3;this.d={a:2,b:0}};

class Obj {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  constructor(a, b, c) {
    this.a = 'Hello';
    this.height = ' ';
    this.width = 'World';
  }
}
 //es6 class
 let obj3 = new Obj(0, 2, {a:2,b:0});