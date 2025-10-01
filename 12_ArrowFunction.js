// Example 1 of arrow function with two argument
const sum=(a,b)=>{
    return a+b;
};

console.log(sum(4,8));

// example 2
// with one argument

let cube=(n)=>{
    return n*n*n;
};
console.log(cube(2));

// we can also able to write a single argument function without the round bracket lets understand with an example -
// its only allowed in One argument not in 0,or more than or equal to 2 arguments
let cube1=n=>{
    return n*n*n;
};

console.log(cube1(5));

// ex3

let square=(n)=>
{
    return n*n;
};