

/*

    Execution-Context / scope
    ------------------------


    memory/stack-frame with given args & locals to execute instructions

    phases:

    phase-1 : context-creation phase  ( push )

        all the variables declared with 'var' keyword anywhere in context,
        will get hoisted to top with default value ( undefined )

    phase-2 : context-execute phase   ( pop )

       ==> instruction will execute kin seq.

    ------------------------------------------------------------------
    
    every .js-runtime has one global-context by default.


    global-obj

    browser-envi : window
    Node.js      : process

    global-conhtext runs by 'global-obj'

    ------------------------------------------------------------------


    every function-call, also creates new-context 
    which is child of in which context that function has declared


*/



// console.log(v);
// var v=12;

// ------------------------------------------------------------------



// var v=12;
// function f1(){
//     console.log(v);
//     var v=13;
// }
// f1(); // f1-context  <---- global-context



// Quiz

// var v=12;
// function f1(){
//     function f2(){
//         console.log(v);
//     }
//     // f2();  // f2-context  <--- f1-context
//     var v=13;
//     //f2();  // f2-context  <--- f1-context
//     return f2;
// }

// var f2Ref=f1(); // f1-conntext  <--- global-context
// f2Ref();


//------------------------------------------------

// var v=12;
// var v=13;

//------------------------------------------------

// var v=100;
// if(true){
//     var v=200;
// }
// console.log(v);

//------------------------------------------------


// problems with 'var' keyword

/*

    ==> variable always get hoist
    ==> can re-declare same variable within context multiple-times
    ==> No block-scope to variables

*/


// soln : using 'let' & 'const' kewords  ( Es6 )

//------------------------------------------------

// console.log(v);
// let v=12;

//------------------------------------------------

// let v=12;
// let v=13;
//------------------------------------------------

// var v = 100;
// if (true) {
//     let v = 200;
// }
// console.log(v);

//-----------------------------------------------

const tnr={
    name:'Nag'
};

// tnr=null;

tnr.name="Nagabhushanam";