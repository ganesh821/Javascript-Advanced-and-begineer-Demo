//"This" keyword which is used in function, refers to object it belongs to
// this function is resuable letting you decide the object value
//the value is determinedly, how the function is called

// 4 types this keyword determinely:
// Implicitbinding
// explicitbinding
// defaultbinding
// newbinding



// function sayMyName(name){
//     console.log(`my name is ${name}`);
// }

// sayMyName("Ganesh");
// sayMyName("ram");


//1) implicit binding: when the function invoked the dot notation, the object of left key is this keyword is references. 

// const person = {
//     name : "ganesh",
//     sayMyName : function(){
//         console.log(`my name is ${this.name}`);

//     }
// }
// person.sayMyName();

// Explicit binding: The function is seperate from the function object.

// function sayMyName(){
//        console.log(`my name is ${this.name}`);
//      }

// sayMyName.call(person);

//new Binding: When invoke the function, this keyword is references and empty object 
// The function invoked new keyword, With in the function this keyword always reference new empty object - // this = {} 
//  function Person(name) {
//     // this = {}   
//     this.name = name;
//  }

//  const p1 = new Person("ganesh");
//  const p2 = new Person("ram");

//  console.log(p1.name, p2.name);

 //default binding



 //globalscope

// globalThis.name ="superman"
//  function sayMyName(){
//     console.log(`my name is ${this.name}`);
//   }

//   sayMyName(); // -this is the line default binding



  //prototype: one share the propery and method across instances. prototype is an object its all are shareable properties
//   function Person(fName, lName){
//     this.firstName = fName;
//     this.lastName = lName;
// }

// const person1 = new Person("ganesh", "ram");
// const person2 = new Person("durka", "devi");

// Person.prototype.getFullName = function(){
//     return this.firstName + '' + this.lastName
// }


// console.log(person1.getFullName());
// console.log(person2.getFullName());


// property inheritance: "SUPERHERO" properties and method the inheritance properites. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects

function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

Person.prototype.getFullName = function(){
    return this.firstName + '' + this.lastName
}

function SuperHero(fName, lName){
    // this ={}
    Person.call(this, fName, lName)
    this.isSuperHero = true
}

SuperHero.prototype.fightCrime = function(){
    console.log("Fighting crime");
}

SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero("ganesh","ram");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());



 
