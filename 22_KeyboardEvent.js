let btn =document.querySelector("button");
let inp=document.querySelector("input");

btn.addEventListener("click",function()
{
    console.log("key is pressed");
});

inp.addEventListener("keydown",function(event)
{   
   console.log(event.code);
   console.log(event.key);
    console.log("key is pressed");
});

