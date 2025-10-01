// Qs3. Create an input element on the page with a placeholder "enter your name" and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user's name so it should only accept letters from a–z, A–Z and space (all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading. [Please note that no other character apart from the allowed characters should be visible in the heading]

let h1=document.createElement('h1');
let inp=document.createElement("input");
document.querySelector("body").append(h1);
document.querySelector("body").append(inp);

inp.addEventListener("keypress",function()
{
      h1.innerText=`${inp.value}`;
      console.log(inp.value);
});


