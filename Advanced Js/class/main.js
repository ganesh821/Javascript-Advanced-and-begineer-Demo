//class function introduced es2015.
//two keywords used entire keyinstances; superHero and extends

class Person{
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }

    sayMyName(){
        return this.firstName + "" + this.lastName
        }
}

//instances or constructor:
const classP1 = new Person("ganesh","ram");
console.log(classP1.sayMyName());


class SuperHero extends Person
{
    constructor(fName, lName){
        super(fName, lName)
        this.isSuperHero = true
    }

    fightcrime(){
        console.log("Fighting crime");
    }

 
}

const classP2 = new SuperHero("vishnu","ram");
console.log(classP2.sayMyName());
console.log(classP2.fightcrime());

