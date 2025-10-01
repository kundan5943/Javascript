// Qs1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;

let form=document.createElement("form");
form.action="#";
document.querySelector("body").prepend(form);
let input=document.createElement("input");
input.type="text";
input.placeholder="New input";
let btn=document.createElement("button");
btn.innerText="click me";

form.append(input);
form.insertAdjacentElement("beforeend",btn);

// Qs2. Add following attributes to the element :
//Change placeholder value of input to “username”
// Change the id of button to “btn”

input.placeholder="username";
btn.setAttribute("id","btn");
console.log(btn.getAttribute("id"));

// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

let Accesthtag=document.querySelector("form button");
console.dir(Accesthtag);
Accesthtag.style.backgroundColor="blue";


let AccessthId=document.querySelector("#btn");
AccessthId.style.color="white";

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.

let H1=document.createElement("h1");
H1.innerText="DOM Practice";
H1.style.textDecoration="wavy purple underline";
document.querySelector("body").prepend(H1);

// Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.

let para2=document.createElement("p");
para2.innerText="Apna College";
let b=document.createElement("b");
b.innerText=" Delta ";
para2.append(b);
para2.append("Practice");

document.querySelector("body").insertAdjacentElement("beforeend",para2);

// second way-
let para3=document.createElement("p");
para3.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para3);