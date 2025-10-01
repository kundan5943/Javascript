let url="https://catfact.ninja/fact";

async function getFacts(url) {

   try
   {
     let res1=await fetch(url);
    let data1=await res1.json();
    console.log(res1);
    console.log(data1.fact);

    let res2=await fetch(url);
    let data2=await res2.json();
    console.log(res2);
    console.log(data2.fact);
   }
   catch(err)
   {
      console.log("ERR:-",err);
   }

}
getFacts(url);