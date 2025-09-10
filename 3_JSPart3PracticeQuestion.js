/*Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2] and n = 3
Print, [7, 9, 0]*/

// ----------------------------------------------------------------------------------------
//Q1
/*let arr=[7, 9, 0,-2];
let n=prompt("Type your n");
console.log(arr.slice(0,n));
console.log(arr.slice(0,2));
console.log(arr.slice(0,4));
console.log("Question ended----------------------------------")*/

/*Q2Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2] and n = 3
Print, [9, 0, -2] */
/*
console.log("Question second answer->");
let n2=prompt("Type n for second Q");
let val=arr.length-n2;
console.log(arr.slice(val));

console.log("----------------------------------");*/
//-----------------------------------------------------------------------------------------
/*Excellent observation 👌 You’re right:

prompt() always returns a string (e.g. user types 3, it becomes "3" not 3).

So how does your code still work? Let’s check:

let n=prompt("Type your n");   // Suppose user types 3 → "3"
console.log(arr.slice(0,n));   // arr.slice(0, "3")


👉 In JavaScript, when you use "3" where a number is expected, JS automatically converts it to a number (type coercion).

"3" → 3 (valid number, works fine)

"abc" → NaN (not a number → arr.slice(0, NaN) becomes arr.slice(0, 0) → returns [])

✅ That’s why your code works even though prompt() gives strings.
⚠️ But it’s better to explicitly convert the input to a number using Number() or parseInt(), like this:

let n = Number(prompt("Type your n"));
console.log(arr.slice(0,n));


This way your code won’t behave unexpectedly if you accidentally rely on coercion.*/
// --------------------------------------------------------









let arr=[7, 9, 0,-2];
let n=Number(prompt("Type your n"));
console.log(arr.slice(0,n));
console.log(arr.slice(0,2));
console.log(arr.slice(0,4));
console.log("Question ended----------------------------------")

/*Q2Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2] and n = 3
Print, [9, 0, -2] */

console.log("Question second answer->");
let n2=Number(prompt("Type n for second Q"));
let val=arr.length-n2;
console.log(arr.slice(val));

console.log("----------------------------------");


// Q3. Write a JavaScript program to check whether a string is blank or not.

let str=prompt("Type your string");
if(str.length==0)
{
    console.log("String is empty");

}
else{
     console.log("Not empty");
}
console.log("-----------------------------------------------------");
//Q4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

let str1="KunDan";
let idx=Number(prompt("Type index number "));
console.log(str1);
if(str1[idx]>='a'&&str1[idx]<='z')
{
    console.log("Yes its lowercase character");
}
else{
    console.log("No its not a lowercase character");
}
console.log("-------------------------------------------------");

// Q5.Write a JavaScript program to strip leading and trailing spaces from a string.


let str2="    kundan      ";
console.log(`before removing the extra spaces :-${str2}`);
console.log(`after removing the extra spaces:-${str2.trim()}`);
console.log("--------------------------------");
// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let el=Number(prompt("Q6.type your element"));
let arr2=[2,5,8,3,6,9];
if(arr2.includes(el))
{
    console.log("Yes its exist");
}
else
{
    console.log("No its not exist");
}






