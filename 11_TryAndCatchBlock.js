
// 1
try{
    console.log(a);
    //a is not defined so the browser will throw a error
}
catch
{
    console.log("error is caughed...a is not defined");
}

// 2 We can also print the error by following way

try
{
    console.log(b);
}
catch(err)
{  
    console.log(err);
    console.log(`the error is- ${err}`);
}