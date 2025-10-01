// *for each methods

let arr=[5,8,9,7,9,5,6];

function print(el)
{
    console.log(el);
}

arr.forEach(print);

// *Map method
let arr1=[4,8,5,3,2];
console.log(`(Map)Array before:- ${arr1}`);
let square=arr1.map((el)=>(el*el));
console.log(`Array after:- ${square}`);

// *Filter Method
let arr2=[8,5,6,7,2,10,13];
console.log(`(Filter) Array before:- ${arr1}`);
let even=arr2.filter((el)=>(el%2==0));
console.log(`Array after:- ${even}`);

// *Every ans some Method
// Every method 
let arr3=[2,1,6,8,9,7,5,6]; //mix of odd and even
let arr4=[2,8,6,4,10];//Even elements
console.log(`Every Method for this arr-${arr3} `);
let alleven=arr3.every((el)=>(el%2==0));
console.log(alleven);

console.log(`Every Method for this arr-${arr4} `);
let alleven1=arr4.every((el)=>(el%2==0));
console.log(`result-${alleven1}`);

// some method
console.log(`Some Method for this arr-${arr3} `);
let res1=arr3.some((el)=>(el%2==0));//Result will true if there is one more elements sends true;
console.log(alleven);


//*Reduce Method 

let arr5=[1,2,3,5,6,4];
let finalsum=arr5.reduce((res,el)=>{
    return el+res;
});

// for Extra Question Read pq 18 code


// *Spread Method ("...")
// ex1-
let arr6=[4,8,5,6,9,7,5];

let minel=Math.min(...arr6);
console.log(minel);

// ex2-
let array=[...arr6];
console.log(array);

// ex-3
let even2=[2,4,6,8,10];
let odd2=[1,3,6,5,7,9];

let combi=[...even2,...odd2];
console.log(combi);

// ex4-object literal 
let students={

            name:"kundan",
            div:'A',
           year:'4Year',
           college:'dypatil'
   
};

let datacopy={...students};
console.log(datacopy);

let str="kundan";
let strarr=[...str];
console.log(strarr);

console.log(...even2);

// Rest Method






// Deconstructing





