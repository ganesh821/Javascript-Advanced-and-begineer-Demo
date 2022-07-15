//In javascript, functions are the first class objects.
//1. Just like an object, a function can be passed an argument to a function
//2.A function can also be returned  as values from other functions

// function greet(name){
//     console.log(`hello ${name}`)
// }

// function greetVishwas(greetFn){
//     const name = "vishws";
//     greetFn(name);
// }
// greetVishwas(greet)

//* Any function that passed in a argument to another function is called callbackfunction.


//The function which accept a function as an argument or return a function  is called highorder function

//function greet(name){
    //     console.log(`hello ${name}`)
    // }
    
    // function highOrderFunction(callback){
    //     const name = "vishws";
    //     callback(name);
    // }
    // highOrderFunction(greet);



    //Why callbacks?
    //synchronous callback  and asynchrounous callback is tow types

    //synchrounous callback:
    //A callback which is excuted immediately is called as synchrounous callback.

    //function greet(name){
    //     console.log(`hello ${name}`)
    // }
    
    // function highOrderFunction(callback){
    //     const name = "vishws";
    //     callback(name);
    // }
    // highOrderFunction(greet);


    // for example,
    // let number = [1,2,3,4];
    //number.sort((a,b)=>a-b)
    //number.map(n=>n*2)
    //number.filter(n=>n%2===0)
    //this above array sort map filter used in synchronous call back

    //Ashynchrounous callback:
    //An asynchronous callback is a callback that is often used to continue or resume code excution after an asynchronous operations has completed
   //callbacks are used to delay the excution of a function until a particular times or event has occured.
   //data fetching takes times and we can only run the function we want to after the data hasbeen fetched and not immediately
   
//    function greet(name){
//     console.log(`hello ${name}`)
//    }
//    setTimeout(greet,2000 "vishwas")
//    settimeout is a highorderfunction and greet is a callback function

// function callback(){
//     document.getElementById("demo").innerHTML = "helloworld"
// }
// document.getElementById("btn").addEventListener("click",callback)

// $.get("url", function(data)){
//     $(".result").html(data);
//     alert("load was performed")
// })



//callback interview points;
//callbacks are function passed as argument to other function
//They can be synchrounous if they excute immediately or they can be asynchrounous where they get exacted after some times passed , some events ocured or some events fetched.
//callbacks were go to teh pattern for asynchrounously runing code after fetching the data.
//As more and more request had to be made based on the data obtained from the previous request, developers start to encounter what is known as callback hell