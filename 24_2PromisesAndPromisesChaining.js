let H1=document.querySelector("h1");

function changecolor(clr)
{
    return new Promise((resolve,reject)=>
    {   
        let rdm=Math.floor(Math.random()*10)+1;
        if(clr.length<=rdm)
        {  
            
        setTimeout(()=>
        {
            H1.style.color=clr;
              resolve("Success:clour changed");
        },1000);
         
        }
        else
        {
           reject("failure:colour not changed");
        }
       
       
       
    })
    
}

changecolor("blue").then((result)=>
{
        console.log("Promise result :",result);
        return changecolor("red");
})
.then((result)=>
{
    console.log("promise result :",result);
     return changecolor("yellow");
})
.then((result)=>
{
    console.log("promise result :",result);
    return changecolor("orange");
})
.then((result)=>
{
    console.log("promise result is:",result)
})
.catch((err)=>
{
        console.log("Error:",err);
});