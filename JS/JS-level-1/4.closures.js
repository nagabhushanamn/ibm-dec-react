

/*

A closure is a function having access to the parent scope,
 even after the parent function has closed.

 // why/ where we need ?

    ==> to abstract public behav of any modules
    ==> when func executing async , to access parent scoped data.

*/

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let fun = "bla bla bla";
//     let learn = function () {
//         console.log('learning with ..' + notes);
//     }
//     //learn();
//     console.log('teaching end...');
//     return learn;
// }

// let learnFunc = teach('.js') // teach context with given arg + local
// learnFunc();
// learnFunc();

//--------------------------------------------------------------------


// ==> to abstract public behav of any modules

// e.g counter module

/*
   module pattern:
    ==> self-executable function  / IIFE ( Imm... Invo.. FUnc.. Exp...)

*/

const counter=(function() {
    let count = 0;  // private
    // public
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    let o={
        inc:doCount,
        get:getCount
    };
    return o;
})();


//------------------------------------------------------
