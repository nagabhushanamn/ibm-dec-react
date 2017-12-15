


var myFunctions = [];

function getF(i) {
    return function () {
        console.log(i);
    };
}
for (var i = 0; i < 2; i++) {
    myFunctions.push(getF(i));
}

myFunctions[0](); // 0
myFunctions[1](); // 1