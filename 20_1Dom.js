//1. **Get element By id**
// It will return a single Object

let obj1=document.getElementById("unq");
console.dir(obj1);

//2. **Get Element By Class**

let obj2=document.getElementsByClassName("para1");
console.dir(obj2);


//3.**Get Element By TagName**

let obj3=document.getElementsByTagName("b");
console.dir(obj3);

//------------------------------------------------------------------------------------------------------------------------------------------------



//  *****************classlist*********************************

let p=document.querySelector("p");
console.log(p.classList);
// 1.Add Function
p.classList.add("red");
document.querySelector("b").classList.add("blue");
document.querySelector("b").classList.add("red");


let p3=document.querySelector(".para3");
p3.classList.add("red");
p3.classList.add("Yellowcolor");



// 2.Remove Function
document.querySelector("b").classList.remove("red");
p3.classList.remove("Yellowcolor");
console.log(p3.classList);


//3.Contains function
console.log(p3.classList.contains("rde"));
console.log(p3.classList.contains("red"));

// 4.Toggle function 
// if class is presnt then this function remove that class and if the class is not presnt then it will add new class to that elemmnt;

let p2=document.querySelector(".para2");
p2.classList.toggle("green");//here this class is not presnt so it will add to that obj(tag)
p2.classList.toggle("Yellowcolor");//Same here

p2.classList.toggle("para2");
console.log(p2.classList);


