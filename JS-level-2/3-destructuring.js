


// array destructuring


// let nums = [1, 2, 3, 4, [5, 6]];

// let min=nums[0];
// let avg=nums[1];
// let max=nums[3];

// let [min, avg, max,another=10] = nums;
// let [min, , max] = nums;

// let [a, b, c, d, [e, f]] = nums;

//----------------------------------------

// Obj destructuring

let person = {
    name: 'nag',
    age: 33
};

// let name=person.name;
// let age=person.age;

// or

// let { name, age } = person;


// let myName=person.name;
// let myAge=person.age;

// or

// let {name:myName,age:myAge}=person;

let myName;
let myAge;

({ name: myName, age: myAge }=person);
