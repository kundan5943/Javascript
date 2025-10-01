let ul=document.querySelector("ul");
let div=document.querySelector("div");
let li=document.querySelector("li");

// Here there is a problem event bubbling whenever user click on list then div and ul list event also triggred similarly when click on ul not only ul event triggred but also div event also triggred to solve this issue use "event.stopPropagation";

div.addEventListener("click",function(event)
{   event.stopPropagation();
    console.log("div is clicked");
});

ul.addEventListener("click",function(event)
{  event.stopPropagation();
    console.log("Unoredered list is clicked");
});

li.addEventListener("click",function(event)
{  event.stopPropagation();
    console.log("List is clicked");
});
