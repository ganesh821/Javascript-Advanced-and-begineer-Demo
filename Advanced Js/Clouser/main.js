// closure is a collection of function bundled together with references its surrounding states.
// Clouser is created everytime function is created , at function creation time.


function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    inner();
}
outer();
outer();
outer();


// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//    return inner;
// }
// const fn = outer();
// fn();
// fn();
// fn();

//in javascript, when we return a function from another function , retrun afunction of combination in function definition along with function scope.
// the combination of function and scope it is called closure