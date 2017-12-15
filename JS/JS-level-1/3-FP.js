


/*

    FP - principles

    ==> every function should treated as value/object
    i.e
    ==> function shoud assignable to variables
    ==> function shoud given as args to other function(s)
    ==> function can be retured from other functions
    ==> function can invokable with partial params  ( surrying )

    ---------------------------------------------------------

*/


/*

        HOW TO CREATE FUNCTION-obj IN .JS LANG ?

        2 ways

        a. function-declaration
            
            ==> named function
            ==> always get hoisted with function-obj
            ==> function-obj cretaed at context-creation-phase

        b. function-expression

            ==> anonymous function
            ==> function-obj cretaed at context-execuation-phase


*/

//---------------------------------------------------------
// a. function-declaration
// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12,13));
//---------------------------------------------------------
// b. function-expression
// console.log(add(12,13));  // error
// var add = function (n1, n2) { return n1 + n2 };
// console.log(add(12,13));
//---------------------------------------------------------

// function greet(){
//     console.log('Hello..');
// }

// let sayHello=greet;
// sayHello();

//---------------------------------------------------------

// function greet(f){
//     if(f){
//         f();return;
//     }
//     console.log('Hello..');
// }


// greet();
// greet(function(){console.log('im hugry');});

// e.g

// let nums=[1,3,5,7,9,2,4,6,8,10];
// nums.sort(function(a,b){return a-b});

//---------------------------------------------------------

// function teach(){
//     console.log('teaching...');
//     let learn=function(){console.log('learning...')}
//     return learn;
// }

// let learnFunc=teach();
// learnFunc();
// learnFunc();


//---------------------------------------------------------

// partial function

// function makeAdder(p1){
//     return function(p2){
//         return p1+p2;
//     }
// }

// // let add10=makeAdder(10);
// // console.log(add10(30));

// console.log(makeAdder(10)(30));


//-----------------------------------------

// function reflect(a,b,c){
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(12,13,14));

//-----------------------------------------


// Quiz

// function getFood(){
//     return "No Food";
// }

// function getFood(pay){
//     if(arguments.length===0)return "No Food"
//     return "Biryani";
// }

// console.log(getFood(150));

//--------------------------------------------



// ES6

// function with default params

// function func(a=1, b=2) {
//     //if(!a)a=1;
//     //if(!b)b=2;
//     // a = a || 1;
//     // b = b || 2;
//     console.log(a);
//     console.log(b);
// }

// func(undefined,20);

//---------------------------------------

// functin with Rest params

// function func(a, b, ...r) {
//     console.log(a);
//     console.log(b);
//     console.dir(r);
// }

// func(1, 2, 3, 4, 5, 6, 7);