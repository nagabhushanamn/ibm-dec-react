

/*

    1. simple / primitives ==> values

        a. string
        b. number
        c. boolean
        d. undefined

    2. complex / reference ==> objects

    

*/

//--------------------------------------------------------

// a. string

var name = "Nag";
var selection = 'abc';

//--------------------------------------------------------

// b. number

var count = 12;
var cost=12.12;

//--------------------------------------------------------

// c. boolean

var isFound=true;

/*

// imp-note:

falsy values :

    ==> false,0,"",null,undefined,NAN

    ref : https://dorey.github.io/JavaScript-Equality-Table/    


*/


//--------------------------------------------------------

// d. undefined

var v;

//--------------------------------------------------------


/*

    how to create obj in .js lang ?

    var ref=new Constructor();

    imp-note :

    by default, all .js objes are extensible & configurable

*/

// var config=new Object();
// config.url="http://";
// config.method="GET";
// config.success=function(){
//     //..
// }
// delete config.method;


//--------------------------------------------------------


// literal style objects  ( obj creation without 'new' operator )



// var config=new Object();
// config.url="http://";
// config.method="GET";
// config.success=function(){
//     //..
// }

// // or

// var config={
//     url:'http://',
//     method:'GET',
//     success:function(){}
// };



//--------------------------------------------------------


//  var arr=new Array();
//  arr.push('biryani');
//  arr.push('meals');

//  // or

//  var menu=["biryani","meals"];



//--------------------------------------------------------


// pattern : \d{10}

// var re=new RegExp('\\d{10}');
// var ssn=new RegExp('\\d{3}-\\d{2}-\\d{4}');

// or

// var ssn=/\d{3}-\d{2}-\d{4}/;


//--------------------------------------------------------


// var add=new Function("n1","n2","var result=n1+n2;return result;");


// // or

// function add(n1,n2){
//     var result=n1+n2;
//     return result;
// }


//--------------------------------------------------------



//  how to access .js obj's properties ?

/*

    way-1 : '.' notation
    way-1 : '[]' notation

*/

var person={
    name:'Nag',
    'full-name':'Nag N'
};

console.log(person['name']);
console.log(person['full-name']);

var propName="full-name";
console.log(person[propName]);