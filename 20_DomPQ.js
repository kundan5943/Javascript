// let div=document.createElement("div");
// div.style.backgroundColor="pink";
// div.style.border="10px solid black";
// div.style.width="500px";
// div.style.height="100px";
// document.querySelector('body').append(div);
// let H1=document.createElement("h1");
// H1.innerText="im inside a div tag";

// let para=document.createElement("p");
// para.innerText="Me too";
// para.style.color="orange";
// document.querySelector('div').append(H1);

// div.prepend(para);



let div=document.createElement("div");
div.style.border="2px,solid black";
div.style.backgroundColor="pink";


document.querySelector("body").append(div);

let para=document.createElement("p");
para.innerText="Hello im paragraph inside a div";

let H1=document.createElement("h1");
div.prepend(H1);
H1.innerText="Hello i'm H1 inside div";

div.append(para);
div.appendChild(H1);