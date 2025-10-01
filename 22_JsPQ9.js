// // Qs1. Try out the following events in EventListener on your own: - mokeypressuseout - keypress - scroll - load [Use MDN for help]


// let btn =document.querySelector("button");

// // btn.addEventListener("mouseout",function()
// // {
// //     console.log("cursor is moves out from button");
// // });

// // let inp=document.querySelector("#inp1");
// // inp.addEventListener("",function()
// // {
// //     console.log("hello");
// // })


// // document.addEventListener("scrollend",function()
// // {
// //     console.log("user is scrolling page");
// // });


// document.addEventListener("load",function()
// {
//     console.log("Something is added in DOM");
// });
// // Qs2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.

// let btn2=document.createElement("button");
// btn2.innerText="submit";
// document.querySelector("body").append(btn2);
// btn2.addEventListener("click",function()
// {
//     btn2.style.color="green";
// })





// Qs3. Create an input element on the page with a placeholder "enter your name" and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user's name so it should only accept letters from a–z, A–Z and space (all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading. [Please note that no other character apart from the allowed characters should be visible in the heading]


let H12 = document.createElement("h1");
// let H11=document.createElement("h1");
let inp1=document.createElement("input");

// inp1.addEventListener("input",function()
// {
//      H1.innertext=`${inp1.value}`;
//      console.log(inp1.value);
// });


