//Promise - MDN definition
//A promise is a proxy for a value not necessarily known when the promise is created. It allows
//you to associaate handler with an ashynchronous action eventual successful value or failure season


//What promise?
//A promise is a simply object in javascript
//A promise always one of three states.
  //pending: which is initial state, neither fulfilled nor rejected
  //fulfilled: meaning that the ooperation is completed successfullu
  //rejected: meaning the operation is failure


  //why would you use promise?
    //promise help as deal with asynchronous code infar  more simply way to compared to call backs
    //callback hell avoided with promises

    //How to create a promise?
   // constructor promise create new promise keyword
    //const promise = new promise()

    //how to fulfil or reject promise?
    //The promise constructor function one function as a arguments. let pass in arrow function.This arrow function also receive two arguments.
    //resolve and reject both function

    // const promise =new promise(() =>{

    // })

    const promise =new promise((Resolve,reject) =>{

    })

    //Resolve - The Resolve function Change the status from pending to fullfilled.
    //Rejected - The Rejected function Change the status from pending to Rejected.
    //but this two function call after async function

    // const promise =new promise((Resolve,reject) =>{
    //     setTimeout(() => {
    //       Resolve()
    //     }, 5000)
    // })

  //   const promise =new promise((Resolve,reject) =>{
  //     setTimeout(() => {
  //       reject()
  //     }, 5000)
  // })


  // How to excute the callback function based on the status change?


//Success and failure callback function:
  // //const onFullfillment = () => {
  //   console.log("welcome");
  // }

    // //const rejection = () => {
  //   console.log("bye");
  // }



// const promise =new promise((Resolve,reject) =>{
    //     setTimeout(() => {
    //       Resolve()
    //     }, 5000)
    // })

  //   const promise =new promise((Resolve,reject) =>{
  //     setTimeout(() => {
  //       reject()
  //     }, 5000)
  // })
//  promise.then()
//  promise.catch()

//promise status
//pending to fulfilled. then() excuted
//pending to rejected. catch() excuted

//promise.then(onFullfillment)
//promise.catch(onRejection)


//summary of Interview;
//Begin by explain what is promise
//Dont have technical definition MDN
//Explain inour own words
//How promises are  used for async operation in javascript
//Three stages promise namely , pending ,fulfilled and rejeected
//Talk about function are passed in to the promise constructor function
//Talk of the resolve and rejecet function , how they change the promise from pending to fullfiled or rejected
//Finally take about the onFUlfillment and on Rejection calllback function which let you decide when to run promise is fullfileed or rejected.




// PROMISE II:

//then():

// const promise =new promise((Resolve,reject) =>{
//   //     resolve() or reject()
//   // })
// promise.then(onFullfillmenet);
// promise.catch(onRejection)

// const promise =new promise((Resolve,reject) =>{
//   //   //     resolve() or reject()
//   //   // })
//   // promise.then(onFullfillmenet,onRejection);

//1.Encourage approach
//2.Rejection callback handle error fromm only the promise
//3.If your callback function itself throws or exception there is no code handle that
//4.Even if you onfullfillment callback  throws an exception it caught and then handle exception gradually

//Chaining promises:

// const promise =new promise((Resolve,reject) =>{
//   //     resolve() or reject()
//   // })
// promise.then(onFullfillmenet);
// promise.catch(onRejection)

//Both then and catch methods return promises
//Then() and catch() method can be chained in javascript

//promise.then(onFullfillmenet).catch(onRejection)



//3.Promise static method:
//promise.all() 
   // Query multiple APIs and perform some action but only after all the APIS have finished loading.

  //  const promise1 = promise.resolve(3);
  //  const promise2 = 42;
  //  const promise3 = new promise ((resolve, reject) =>{
  //     setTimeout(resolve, 100, foo);
  //  });

  //  promise.all([promise1, promise2, promise3 ]).then(values)=>{
  //   console.log(values);
  //  };

  //promise.seettled:
    //promise.allSettled () wait for all input promise to complete regardless of whether or not oone of themrejected

 //  const promise1 = promise.resolve(3);
  //  const promise2 = 42;
  //  const promise3 = new promise ((resolve, reject) =>{
  //     setTimeout(resolve, 100, foo);
  //  });

  //  promise.allsettled([promise1, promise2, promise3 ]).then(values)=>{
  //   console.log(values);
  //  };


  //promise.race()
  //This method promise that fulfills or rejected as soon as one of the promises fullfill or rejected,with the value or reason from that prommise.

// const promise1 = new promise((resolve, reject){
//     setTimeout(resolve, 500 ,one)
// });

// const promise2 = new promise((resolve, reject){
//   setTimeout(resolve, 500 ,two)
// });

// promise.race([promise1, promise2]).then(values)=>{
//     console.log(values);
//    };


