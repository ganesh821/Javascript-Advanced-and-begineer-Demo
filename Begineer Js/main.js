// // //main
// // console.log("welcome");
// // //variable
// // let age = 25
// // console.log(age)

// // // const salary =0
// // // salary = 80000
// // // console.log(salary)

// // let sum = 0
// // sum = 5
// // console.log(sum)

// //string
const name = "ganesh"
const language = "English"
const channel = `youtube`

// // const num = 0
// // const PI = 3.14

// // const isPrimaryNumber = true
// // const isNewUser = false

// // let result
// // console.log(result)
// // const res = undefined

// // const data = null


// // const person = {
// //     firstName : "ganesh",
// //     lastName : "ram",
// //     age : 20
// // }

// // console.log(person.age)

const oddNumbers = [1,2,5,4,5,8];
console.log(oddNumbers[3])

// // let a = 10
// // a = "ganesh"
// // a =true
// // console.log(a)

// //assignment operator
// let a = 15;
// console.log(a)

// //artimetic operator
let d = 10;
let e ="10";
console.log(d/e)
console.log(++d)
// console.log(d++)

// //comparsion
console.log(d==e)
console.log(d!=e)
console.log(d===e)
console.log(d!==e)
// // console.log(d >= e)
// console.log(d < e)

// console.log(d==e);

// let a=10;
// let b='10';
// console.log(a===b);

// let x = 18;
// let y = 3;
// const isValidNumber = x > 8 && 8 > y
// console.log(isValidNumber)

// let a = 5
// let b =7
// const isValidNumber1 = a > 3 && 8 > b
// console.log(isValidNumber1)

// let q = 5
// let r =7
// const isValidNumber1 = q > 3 || 8 > r
// console.log(isValidNumber1)

// const isvalid = true;
// console.log(!isvalid);

// console.log("ganesh " + "ram" )

//ternary operator
// const isEven = 10 % 2 === 0 ? true : false
// console.log(isEven);

// const isEven = 15 % 2 === 0 ? "even" : "odd"; 
// console.log(isEven);


//type converstion -implicit and explicit
console.log("2" + 4);
console.log("2" + true);
console.log("2" - true);
console.log("ganesh" - "ram");
// console.log("ganesh" - "ram");
// console.log("5" - null);

// parseInt
console.log(parseInt("500.00"));
// console.log(parseInt());
console.log(parseFloat(3.14));

let text = "Hello World!";
let result = text.toString();
console.log(result);

let num = 15;
let result1 = num.toString();
console.log(result1);

console.log(String(2000));

console.log((1500).toString());
// console.log(Boolean(20));         //null  undefined " "

//equality:
const var1 = "test";
const var2 = "test";
console.log(var1 == var2);
console.log(var1 === var2);


const var3 = "10";
const var4 = 10;
console.log(var3 == var4);
console.log(var3 === var4);


//condition statement:
// if , else else if swwitch

// let num =5;
// if(num > 0){
//     console.log("number is positive");
// }

// let num =-5;
// if(num > 0){
//     console.log("number is positive");
// }else{
//     console.log("number is negative");
// }


// let num =0;
// if(num > 0){
//     console.log("number is positive");
// }
// else if(num < 0){
//     console.log("number is negative");
// }
// else{
//     console.log("number is Zero");
// }


const color = "red";

switch (color){
       case "red" :
        console.log("color is red");
        break;
        case "blue" :
        console.log("color is blue");
        break;
        case "green" :
        console.log("color is green");
        break;
        default:
            console.log("no matching color");


}

// loop:forloop while loop do while loop for of loop

for(let i =0; i<=5; i++){
    console.log("iteration " + i);
}

//whileloop:

// let i =1;
// while(i<=5){
//     console.log("iteration " + i);
//     i++;
// }

//dowhile- do while atleast excuted once "that is the different betwen while loop"

// let i =1;
// do{
//     console.log("iteration " + i);
//     i++;
// }while(i<=5)

// for...Off

// const numArray = [1,2,3,4,5];
// for(const num of numArray){
//     console.log("iteration number " + num);
// }

//function- block of code designed to be a particular task

//  function greet(username){
//     console.log(`Hello my name is ${username}`);
//  }
 
//  greet("ganesh");
//  greet("ram");

// function add(a,b){
//     return a+b;
// }

// const sum = add(5,7);
// console.log(sum);

// arrow:
// const arrowSum = (a,b) => {
//     return a+b;
// }

// const sum = arrowSum(8,7);
// console.log(sum);

// scope- scope determines the accessibility or visibility of variables. 
//block scope - let and const -inside the curly brackets access not outside of the block.


// if(true){
//     const myName = "viswas";
//     console.log(myName);
// }

// //function - function variable can be declared inside the function not accessible the outside the funcion
// function testName(){
//     const myName = "ganesh";
//     console.log(myName);
// }

// testName();

//global -block code access outside of the function
const myNum = 100;

if(true){
    const myName = "viswas";
    console.log(myName);
    console.log(myNum);
}

//function - function variable can be declared inside the function not accessible the outside the funcion
function testName(){
    const myName = "ganesh";
    console.log(myName);
    console.log(myNum);
}

testName();





