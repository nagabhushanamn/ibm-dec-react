

// let getPrice = function () {
//     return 100 + 200;
// }

//-------------------------------

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice=()=>100+200;
// let getPrice = (count) => (count * 100) + 200;
// let getPrice = count => (count * 100) + 200;
// let getPrice = (count, tax) => (count * 100) + tax + 200;
// let getPrice = (count, tax) => {
//     let cost = (count * 100);
//     let total = cost + tax + 200
//     return total;
// };


// why/where we need arrow function ?


/*

    ==> to simplify function arg
    

    limitation with regular function:
    ------------------------------

    ==> by default, they bound to global-obj;
    ==> dynamically we can bind to any other obj

    Adv of arrow-function:
    ----------------------

    ==> always bound to creator
    ==> we cannot bind to any obj dynamically with call/apply/bind methods

*/


// let nums=[1,3,5,7,8,2,4,6,8,10];
// // nums.sort(function(a,b){return a-b});
// nums.sort((a,b)=>a-b);
// console.log(nums);


//------------------------------------------------------


// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }

//         // or

//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }

//         return askQues;
//     }
// };

// let askQues = tnr.doTeach();
// console.log("--------------------");
// askQues('Q1');

// let newTnr = { name: 'dummy' };
// askQues.call(newTnr, "Q2");


//--------------------------------------------------




// Quiz


    // let invoice={
    //     num:123,
    //     process:function(){
    //         console.log(this.num +"-invoice prcessed...");
    //     }
    // };

    // let invoice={
    //     num:123,
    //     process:()=>{
    //         console.log(this.num +"-invoice prcessed...");
    //     }
    // };


    // let invoice={
    //     num:123,
    //     process:function(){
    //         console.log(this.num +"-invoice partially prcessed...");
    //         return function(){
    //             console.log(this.num +"-invoice completly prcessed...");
    //         }
    //     }
    // };


    let invoice={
        num:123,
        process:function(){
            console.log(this.num +"-invoice partially prcessed...");
            return ()=>{
                console.log(this.num +"-invoice completly prcessed...");
            }
        }
    };

    let newF=invoice.process();
    newF();