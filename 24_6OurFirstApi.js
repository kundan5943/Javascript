let url="https://catfact.ninja/fact";

let btn=document.querySelector("#btn");
btn.addEventListener("click",async ()=>
{
    let fact=await getfacts(url);
    let p=document.querySelector(".reslt");
    p.innerText=fact;
})
async function getfacts(url)
{
    try{  
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);
        return data.fact;
    }
    catch(err)
    {
        console.log("ERR-",err);

    }
}