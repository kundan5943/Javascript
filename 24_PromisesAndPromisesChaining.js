function savetodb(data)
{
    return new Promise((resolve,reject)=>
    {
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4)
        {   

            resolve("success:data was save");
        }
        else
        {
            reject("Failure:Weak Connection");
        }
    })
}

let result=savetodb("Apna College");
result.then((rslt)=>{
       console.log("Result of Promises is:",rslt);
       return savetodb("hello");
})
.then((rslt)=>
{
    console.log("Result of Promises is:,",rslt);
    return savetodb("kundan");
})
.then((rslt)=>
{
    console.log("Result of Promise is:Data3 is Saved Successfully",rslt);
})
.catch((err)=>{

         console.log("rejected:",err);

});



