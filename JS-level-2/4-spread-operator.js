

function func(a, b, c, d, e) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
let params = [1, 2, 3, 4, 5];
func(params[0], params[1], params[2], params[3], params[4]);

// es6
func(...params);


//-----------------------------

let a = [1, 2, 3];
let b = [7, 8, 9];

let c = [...a, 4, 5, 6, ...b];

//----------------------------------