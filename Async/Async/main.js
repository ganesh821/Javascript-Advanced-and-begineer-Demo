//async/await introduced es2017
//The async await keywords allows us to write completely synchronous- looking code while performing ashynchronous task behind this


// The async keyword:
// The async keyword declare async functions
// Async functions are functions that are the instances of AsyncFunction constructor.
// Unlike normally function, async function return a promise

// async function greet(){
//     return "hello";
// }
// greet();

// async function greet(){
//     return.promise.resove{"hello"};
// }
// greet();

//Ans: promise{fulfillment:"hello"}


//awiat:

//await keyword can be put infront of any async promise based function to pause your code untils the promise settle and return its result.
//awaits only work in inside async functions. Cannot use in await functions

// async function greet(){
//     let promise = new promise((resolve, reject)=>{
//         setTimeout(()=>resolve("Hello"), 1000)
//     });

//     let result = await promise;
//     console.log(result);
// }

// greet();


//sequential vs concurrent vs  parell excution

// function resolveHello(){                                    
//     return new promise(resolve => {
//         setTimeout(function (){
//             resolve("hello")
//         }, 2000)
//     })
// }


// function resolveworld(){
//     return new promise(resolve => {
//         setTimeout(function (){
//             resolve("world")
//         }, 2000)
//     })
// }


// Ans:

// sequential: This meethod take some time 3 seconds for helloworld

// async function sequentialStart(){
//     const hello  = await  resolveHello()
//     console.log(hello)   //long after 2 seconds

//     const world  = await  resolveworld()
//     console.log(world) ///long after 2+1=3 seconds
// }
// sequentialStart()


//concurrent:

// async function concurrent(){
//     const hello = resolveHello()
//     const world = resolveWorld()

//     console.log(await hello)  //log after 2 seconds
//     console.log(await world)  //log after 2 seconds

// }

// concurrent()


//parell:
// function parallel(){
//     Promise.all([
//         (async () => console.log(await resolveHello()))(), //2 secnds
//         (async () => console.log(await resolveWorld()))(), //1 seconds
//     ])
//    console.log("Finally")
// }
// parallel()
ans:
// logs; world hello , total time taken 2 seconds


Intereview:
// The async and await  keyword enable asynchrounous, promise based behaviour to written in cleaner style,
//-avoid the need to explicity  configure of promise chains

// async-await introducted es2017
//async keywrod return a promise
//await keyword -pause excution till the promise is resollved or rejected
//sequential vs concurrent vs  parell excution neccessaary

