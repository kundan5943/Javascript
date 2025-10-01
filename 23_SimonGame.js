let level=0;
let start=true;
let colors=['red','yellow','green','blue'];
let H3=document.querySelector("h3");
let body=document.querySelector("body");

let originalseq=[];
let userseq=[];
body.addEventListener("keypress",function()
{   if(start==true)
    {
        start=false;
         levelup();    
    }
    
});
function gameflash(btn)
{
     btn.classList.add("whiteBackground")
    setTimeout(function()
    {
       btn.classList.remove("whiteBackground");
    },300);

    
}
function userflash(btn)
{
     btn.classList.add("greenBackground")
    setTimeout(function()
    {
       btn.classList.remove("greenBackground");
    },100);

    
}

function levelup()
{   
    userseq.length=0;
    level++;
    let dig=Math.floor(Math.random()*3); 
  
        
   H3.innerText=`Level ${level}`;
   let color= colors[dig];
   originalseq.push(color);
   console.log(color);
   let btn=document.querySelector(`.${color}`);
   gameflash(btn); 
   console.log(originalseq); 
}

function checkans(idx)
{
    
    if(originalseq[idx]==userseq[idx])
    {
       if(originalseq.length==userseq.length)
       {
            setTimeout(levelup,1000);
       }
     

    }
    else
    {
       let body= document.querySelector("body");
       body.style.backgroundColor="red";
       originalseq.length=0;
       start=true;
    
        H3.innerHTML=`Game Over,<b>Your Score is:- ${level} </b> <br>Press Any Key To start the game`;
        console.log(`game over ${userseq}`);
           level=0;
     setTimeout(function()
    {
        body.style.backgroundColor="white";

    },1000);
    }
}
function btnpressed()
{
    if(start==false)
    {   
    let btn=this;
    let color=btn.getAttribute("id");
    
    userseq.push(color);
    userflash(btn);

    
    checkans(userseq.length-1);
    } 
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{

 btn.addEventListener("click",btnpressed);
}

