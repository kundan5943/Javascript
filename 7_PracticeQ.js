let maxval=Number(prompt("Enter the max number"));
const randval=Math.floor(Math.random()*maxval)+1;

while(true)
{
    let uservalstr=prompt("Type your value");
    
    if(uservalstr=="exit")
    {
        break;
    }
    if(uservalstr=="reveal")
    {
        console.log(`random value is ${randval}`);
        break;
    }
    let uservalno=Number(uservalstr);
    if(uservalno==randval)
    {
        console.log(`Congrats Your guess is right.`);
        break;
    }
    else if(uservalno<randval){
        console.log(`Wrong Guess your value is smaller try bigger value`);

    }
    else
    {
        console.log(`Wrong Guess your value is greater try smaller value`);
    }
}