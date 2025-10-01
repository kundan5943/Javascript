let submitbtn=document.querySelector("#submit");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

let deletebtn=document.querySelectorAll(".delete");
// for(btn of deletebtn)
// {
//     btn.addEventListener("click",function()
//         {
//             let parnt=this.parentElement;
//             parnt.remove();
//         });
// }

ul.addEventListener("click",function(event)
{
   if(event.target.nodeName=="BUTTON")
   {
    let parnt=event.target.parentElement;
    parnt.remove();
   }
});
submitbtn.addEventListener("click",function()
{
    let list=document.createElement("li");
    let btn=document.createElement("button");
    btn.style.marginLeft="30px";
    btn.innerText="delete";
    list.innerText=inp.value;
    ul.appendChild(list);
    list.appendChild(btn);

    inp.value="";

});