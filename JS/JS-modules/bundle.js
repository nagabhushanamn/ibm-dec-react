(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



let mod1=require('ibm-dec-greet');
mod1.greet('en');
},{"ibm-dec-greet":2}],2:[function(require,module,exports){

// var app = app || {};

// (function () {

//     app.mod2.doWork();
//     app.mod3.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };

//     app.mod1 = o; // export

// })();

//-----------------------------------------------


console.log('-mod1.js-');
let en=require('./mod2');
let es=require('./mod3');

let message="GM";
function greet(lang){
    if(lang==="en"){
        en();
    }
    if(lang==="es"){
        es();
    }
}
module.exports={
    greet
};


},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){

// var app = app || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };

//     app.mod2=o;

// })();

//-------------------------------------

function greet(){
    console.log('hello...');
}
module.exports=greet;

},{}],4:[function(require,module,exports){

// var app = app || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };

//     app.mod3 = o;

// })();

//---------------------------------------


function greet(){
    console.log('ola...');
}
module.exports=greet;
},{}]},{},[1]);
