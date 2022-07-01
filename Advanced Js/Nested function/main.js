//nested scope- js nested scope declare inside function scope and also outside global scope.
//one function inside another function is called nested function
let a = 10;

function outer(){
    let b = 20;
    function inner(){
        let c =30;
        console.log(a,b,c);
    }
    inner();
}
outer();