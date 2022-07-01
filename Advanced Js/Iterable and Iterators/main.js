//iterator is array and string - two methods
//es6 new iterable is iterable and iterator - protocol

//some of the datastructor of iterable protocol like default. ex array, string, map and set.
// for loop content usng iterator 

//string

// const str = "vishwas";
// for(const char of str){
//     console.log(char);
// }

//Array:

// const arr =["g","a","n"];
// for(const item of arr){
//     console.log(item);
// }


// What is iterable and iterator?
//   1.An object which implements iterable protocol is called iterable.
//   For an object to be an iterable is must implement the method at the key [eg: Symbol.iterator].
//   The method should not accept any argument and should return an object which confirm to protocol.


//   2. The iterator protocol decides whether the object is an iterator.
//   the object must have next() method that return the object of two properties.
//     1. value: which give the current Element
//     2. done: Whether boolean value indicating whether or not  anymore element could be iterated open





// ..........................................................................................................

// const obj = {
//     [Symbol.iterator]:function(){
//         let step = 0
//         const iterator= {
//             next:function(){
//                 step++;
//                 if(step === 1){
//                     return {value: "Hello", done: false }
//                 }else if(step === 2){
//                     return {value: "world", done: false }
//                 }
//                 return {value:undefined, done:true}
//             }
//         }
//         return iterator 
//     },
// }

// for(const word of obj){
//     console.log(word)
// }


//generator:
// A generator in JavaScript consists of a generator function, which returns an iterable Generator object.
//Genetator is a specialclass of function.* is a special key word.
//generate function is function that stop with way, continue with stop and passed the fucntion is yield keyword

function* generateFunction(){
    yield "Hello";
    yield "welcome"

}

const generatorObject = generateFunction();
for(const word of generatorObject){
    console.log(word)
}