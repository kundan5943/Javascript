let gameseq=[];
let userseq=[];
let colors=["red","green","yellow","blue"];
let body=document.querySelector("body");
let H3=document.querySelector("h3");
let start =true;
let level=0;

let Hghsc=document.querySelector("#hghscore");
let hscore=0;
body.addEventListener("keypress",function()
{   
    if(start==true)
    {
         start=false;
         levelup();
    }
   
});
function gameflash(color)
{
        let btn=document.querySelector(`.${color}`);
         btn.classList.add("whitebackground");
         console.log(btn);
         setTimeout(function()
        {
           btn.classList.remove("whitebackground");
        },500);
         

}
function userflash(btn)
{
       
         btn.classList.add("greenBackground");
         console.log(btn);
         setTimeout(function()
        {
           btn.classList.remove("greenBackground");
        },500);
         

}
function levelup()
{
     level++;
     userseq.length=0;
     let randomdig=Math.floor(Math.random()*3);
     let color=colors[randomdig];
     let btn=document.querySelector(`.${color}`);
     console.log(btn);
    H3.innerText=`Level ${level}`;
    gameflash(color);

    gameseq.push(color);

}
function checkans(idx)
{   
    if(gameseq[idx]==userseq[idx])
    {   console.log(gameseq);
        console.log(userseq);
        if(gameseq.length==userseq.length)
        {
           setTimeout(levelup,1000);   
        }
  
    }
    else{

        H3.innerHTML=`Game Over,<b>Your Score is ${level}</b> <br> Press Any Key To start the game `;
      
        start=true;
        console.log("Game Over");
        gameseq.length=0;

        if(hscore<=level)
        {
            hscore=level;
            Hghsc.innerText=`Highscore ${hscore}`;
            
        }
          level=0;
    }
}
function btnpressed()
{
    if(start==false)
    {
        let btn=this;
        userflash(btn);
        let color=btn.getAttribute("id");
        userseq.push(color);
            console.log(color);

            checkans(userseq.length-1);
    
   }
   
}


let btns=document.querySelectorAll(".btn");

for(btn of btns)
{
    btn.addEventListener("click",btnpressed);
}