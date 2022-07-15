//Async javascript what and why?
// In this most basic form, javascript is a synchrounous, blocking and single threaded programming language.


//synchronous:
//If we have two functions which log messages to the console, code excutes top down, with only one line excuting at any given time.

//Blocking:
//No matters how long the previous process takes, the subsequent processes wont kick off until the farmer is completed.
//ex: If function A had to excute an intensive chunck of code, javascriipt has to finish that without moving on to function B.
//Even if the code takees 10 seconds or 1 minutes

//The browser is blocked in  continously handle user input task and then   until the webbrowser performed web app return control of the processes.

//Single Thread:
 //A threaded is a simply process that your javascript program can use to run a task. Each thread can only do one task at a time.
 //Javascript has one thread called the main thread for excuting code.



 //Timeout and Intervals:
 // The traditional method javascript has available for running code asynchronously.
 //After a set time period elapsed or 
 //at regular interval time
 //setTimeout() and setInterval()



 //setTimeout:
 //The setTimeout() function excutes a particular block of code, once after speciefied time has elapsed.
 //setTimeout(function, duration, param1, param2, ....)

 //The firstparameter is a function to run,  or reference to a functiondefined elsewhere
 //The second parameteris a number representing the duration in milliseconds to wait before excute the code.
 //After the sescond parameter , you pass zero or more values that represent any parameter you want to pass to the function when it is run.


//  function greet(){
//     console.log("hello")
//  }

//  setTimeout(greet, 2000) // Hello to the console after 2 seconds

// function greet(name){
//     console.log(`Hello ${name}`);

// }

// setTimeout(greet, 2000, "vishwas"); // Hello vishwas display after 2 seconds


//setTimeout:
//To clear a Timeout, you can use the clearTimeout() method passing in the identifier returned by setTimeout as Parameter


// //function greet(){
//     console.log("hello")
// }
// const timeoutId = setTimeout(greet,2000,"vishwas")
// clearTimeout(timeoutId)
// //nothing is display inth console


//setInterval:
//The setInterval() function repeatedly run the same code over and over again at regular intervals

//setInterval(function, duration, param1, param2,...)
//The first parameter code excute
//The sescond parameter duration in millsessconds
//after the second paameter, you can use zero ormore values that reprsenets any parameter you want to pass the function when it is run.

// //function greet(){
//     console.log("hello")
// }
// setInterval(greet,2000)

//Hello every 2 seconds

//set interval or cleaer intervl:
//Interval keep running a task forever you should clear the interval when apporpriate.

//const intervalId = setInterval(greet, 2000, "vishwas")
// clearInterval(intervalID)


//Highlight of points

//timers and intervals are not a part of javascript itself. They are implemented by the borwser and 
// settimeout and setInterval are basically name given to a function in javascript.

//duration parameter in the minimum delay, not guraanted delay

// it is possible to achieve the same effects as setInterval with recursive at setTimeout.

// setTimeout(function,run(){
//     console.log("hello")
//     setTimeout(run,100)
// },100)

//The above program is recrusive setTimeout Function

//1.duration is gurantted  between excutions.
//2.you can calculate different delay for iteration of each iteration   

// setInterval(function,run(){
//     console.log("hello")
//     
// },100)


//1.The duration interval includes the times taken to excute the code you want to run
//set interval is always fixed interval
