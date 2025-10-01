// Print greet function till 10sec and print ones after 2 sec
function greet()
{
    console.log("hello");
}
function stopInterval(id)
{
     clearInterval(id);
}


let id=setInterval(greet,2000);

setTimeout(function stopInterval()
{
    clearInterval(id);
},10000);