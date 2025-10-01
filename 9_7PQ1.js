//Q1Write a JavaScript function that returns array elements larger than a number.

function largerelement(arr,number)
{
   let ans;
    for(el of arr)
    {
        if(number<el)
        {
            ans=el;
            break;
        }

    }
    return ans;
}

let arr=[4,8,20,97,22,7,8,4];
console.log(largerelement(arr,50));

//Q2 Write a JavaScript function to extract unique characters from a string. Example: str = "abcdabcdefgggh" ans = "abcdefgh"

function UniqueChar(str)
{
    let arr=[];
      let ans="";
       for(el of str)
       {
        if(!arr.includes(el))
        {
              arr.push(el);
              ans+=el;
              
        }
       }
    
       return ans;

}

let str="abcdabcdefgggh";
console.log(UniqueChar(str));


//Q3 Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//  Example: country = ["Australia", "Germany", "United States of America"] output: "United States of America"


function longestStr(arr)
{

    let ans=arr[0];
    for(i=1;i<arr.length;i++)
    {
        if(ans.length<arr[i].length)
        {
            ans=arr[i];
        }
    }

    return ans;

}

let  country = ["Australia", "Germany", "United States of America"];
let result=longestStr(country);
console.log(result);

//Q4Write a JavaScript function to count the number of vowels in a String argument.

function countVowels(str)
{ 
    let count=0;
        for(el of str)
        {
            if(el=='a'||el=='e'||el=='o'||el=='i'||el=='u')
            {
                count++;
            }
        }

        return count;

}

let str1="apple";

console.log(`Number of vowels are:- ${countVowels(str)}`);

//Qs5. Write a JavaScript function to generate a random number within a range (start, end).


function randomno(st,end)
{
    let randomval=Math.floor(Math.random()*(end-st+1))+st;
    return randomval;

}

console.log(randomno(2,6));
