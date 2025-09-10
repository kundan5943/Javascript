//Creates a function that returns the concatenation of all string in an array
function concateString(arr)
{     
    let fullstring="";
        for(el of arr)
        {
            fullstring+=el;
        }
    return fullstring;
}

let arr=["kundan","Rajendra","Chaudhari"];

let arr2=["hello","hiii","byy"];