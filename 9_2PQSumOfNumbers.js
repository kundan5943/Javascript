function SumOfNumbers(st, end)
{
    let Sum=0;

    for(let i=st;i<=end;i++)
    {
        Sum+=i;
    }
    return Sum;
}
let result=SumOfNumbers(1,10);
console.log(result);
