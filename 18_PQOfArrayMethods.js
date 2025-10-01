let arr=[2,8,5,9,13,67,5,8];

let maxval=arr.reduce((res,el)=>{
    if(res<el)
    {
      
       return el;
    }
    else{
        return res;
    }
});

console.log(maxval);

// Q2 Check all the numbers in array are multiples of 10 or not

let arr1=[20,30,40,80,90,70];

let arr2=[20,8,50,9,130,67,50,80];

let res1=arr1.every((el)=>(el%2==0));
let res2=arr2.every((el)=>(el%2==0));

console.log(res1);
console.log(res2);


// Q3 Creates function that finds the minimum number in an array

// i using here previous array
console.log("Q3->");
console.log(arr1);
let finalres=arr1.reduce((res,el)=>{
    if(res>el)
    {
        return el;
    }
    else
    {
        return res;
    }
});
console.log(finalres);