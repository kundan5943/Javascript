// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let arr=[5,8,6,7,4,3,7];//Global Array

let square=arr.map((el)=>(el*el));
console.log(square);
let sum=square.reduce((res,el)=>(el+res));
let ans=sum/arr.length;
console.log(ans);


// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

// i using here global array
console.log("Q2 Ans:-")
let newarr=arr.map((el)=>(el+5));
console.log(newarr);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.
// let charr=['a','d','f,','g'];
// let uppcase=charr.toUpperCase();

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

let double=(arr,...args)=>{

   let v=args.map((el)=>(  el*2));

   for(el of v)
   {
    arr.push(el);
   }
   return arr;
};

console.log(double([4,5,8,9,8,2],8,5,98,7));


// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1,obj2)
{
    obj1={obj1,...obj2};
    return obj1;
}

let obj1=
{
    name:"kundan",
    course:"engineering",
    marks:90

}
let obj2=
{
     name:"Aaditya",
    course:"engineering",
    marks:95
}
console.log(mergeObjects(obj1,obj2));