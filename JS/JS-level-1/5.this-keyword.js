

/*
    this
    ==> current execution-context's owner

*/


// why we need 'this' keyword?

//let pName = "Global";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         console.log('im ' + pName);  // context's hierarchy
//         console.log('im ' + person.pName); // obj's property
//         console.log('im ' + this.pName); // current context's owner data
//     }
// };

// // person.sayName();
// let oldPerson = person;
// person = { pName: 'IBM' };
// oldPerson.sayName();


//----------------------------------------------------------------




/*

    function-binding

    a. static function-binding
    b. dynamic function-binding

*/

// a. static function-binding

// let p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
// let p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};


// function sayNameForAll() {
//     console.dir(this);
//     console.log('im ' + this.name);
// }
// let p1 = { name: 'Nag', sayName: sayNameForAll };
// let p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ?  //  function-invocation( this ==> global-obj)
// p1.sayName();  // im Nag  //  method-invocation ( this ==> invoker-obj)
// p2.sayName(); // im Ria   // 


//----------------------------------------------------------------


// b. dynamic function-binding



// third-party
let greetLib = {
    sayName: function (message, from) {
        console.log(message + ' im ' + this.name + " : " + from);
    }
};
// greetLib.sayName();

// our code
let p = { name: 'Nag' };
let e = { name: 'IBM' };

// // way-1
// greetLib.sayName.call(p,"Hello","CHN");
// greetLib.sayName.call(e,"Hey",'Universe');


// way-2
// greetLib.sayName.apply(p,["Hello","CHN"]);
// greetLib.sayName.apply(e,["Hey",'Universe'])

// way-3
// let nagPersonSayName = greetLib.sayName.bind(p, "Hello", "CHN");
// nagPersonSayName();
// nagPersonSayName();


// let empSayName = greetLib.sayName.bind(e);
// empSayName('hey', 'BLR');
// empSayName('dude', 'CHN');



//-------------------------------------------------------


// 100+ similar person objs


// ES5

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im ' + this.name);
    }
}

let p1 = new Person('Nag', 33);
//........


//-----------------------------------------------------

/*

 in .js-lang , we can invoke function 4 ways


    a. function invocation  ( this ==> global-obj )
    b. method invocation    ( this ==> invoker-ob )
    c. call/apply/bind invocation ( this ==> arg-obj )
    d. constructor invocation ( this ==> new-obj)

*/
