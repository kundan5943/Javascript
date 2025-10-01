let btn=document.querySelector("#btn");
// let url="https://http.cat/";
// btn.addEventListener("click",async()=>
// {
//     let srccd=document.querySelector("input").value;
//     let link= await getImages(srccd);
//     let img=document.querySelector("img");
//     img.src=link;
// });

// async function getImages(code)
// {
//       let resp=await axios.get(url+code);
//       console.log(resp);
// }
let url="http://universities.hipolabs.com/search?country=";

btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    let colleges=await getColleges(country);
    console.log(colleges);
     ShowColleges(colleges);

});

function ShowColleges(colleges)
{
  let list=document.querySelector("ul");
  list.innerText="";
    for(colg of colleges)
    {
     let li =document.createElement("li");
     li.innerText=colg.name;
     list.appendChild(li);
     
    }

}

async function getColleges(country) {

    try{
          let resp=await axios.get(url+country);
          console.log(resp);
          return resp.data;
    }
    catch(e)
    {
        console.log("ERR-",e);
    }
   
    
}