//HigherOrder Function
//1.Takes one or function as arguments

function multipleGreet(func,count)
{
      for(let i=1;i<=count;i++)
      {
         func();
      }
}

function greet()
{
    console.log("Namaste");
}

multipleGreet(greet,5);

// 2.Function Returns a function

//Example1

function oddorEvenFactory(request)
{
      
    if(request=="odd")
    {
        return function(n)
        {
            console.log((n%2!=0));
        }
    }
    else if(request=="even"){
        return function(n)
        {
            console.log(n%2==0);
        }
        
    }
    else{
        console.log("wrong request");

    }
}


